import SwiftUI
import WebKit

struct ContentView: View {
    @AppStorage("fyn_server_url") private var serverUrlString: String = "http://localhost:3001"
    @State private var showingSettings = false
    @State private var tempUrlString: String = ""
    @State private var isLoading = false
    @State private var loadFailed = false
    @State private var errorMessage = ""
    @State private var webViewKey = UUID()

    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()

            VStack(spacing: 0) {
                // Main Native WKWebView container
                WebViewContainer(
                    urlString: serverUrlString,
                    isLoading: $isLoading,
                    loadFailed: $loadFailed,
                    errorMessage: $errorMessage
                )
                .id(webViewKey)
                .ignoresSafeArea(.all, edges: .all)
            }

            // Minimalist loading bar at top
            if isLoading {
                VStack {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                        .scaleEffect(0.8)
                        .padding(.top, 48)
                    Spacer()
                }
            }

            // Connection Error / Offline Screen
            if loadFailed {
                VStack(spacing: 20) {
                    Image(systemName: "wifi.exclamationmark")
                        .font(.system(size: 44, weight: .light))
                        .foregroundColor(.white)

                    Text("Unable to Connect to FYN")
                        .font(.system(size: 20, weight: .bold, design: .rounded))
                        .foregroundColor(.white)

                    Text(errorMessage.isEmpty ? "Make sure the FYN Python backend server is running on \(serverUrlString)" : errorMessage)
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(Color(white: 0.7))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 32)

                    HStack(spacing: 14) {
                        Button(action: {
                            loadFailed = false
                            webViewKey = UUID()
                        }) {
                            HStack {
                                Image(systemName: "arrow.clockwise")
                                Text("Retry")
                            }
                            .font(.system(size: 14, weight: .bold))
                            .foregroundColor(.black)
                            .padding(.horizontal, 22)
                            .padding(.vertical, 12)
                            .background(Color.white)
                            .cornerRadius(8)
                        }

                        Button(action: {
                            tempUrlString = serverUrlString
                            showingSettings = true
                        }) {
                            HStack {
                                Image(systemName: "gearshape")
                                Text("Server Settings")
                            }
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundColor(.white)
                            .padding(.horizontal, 18)
                            .padding(.vertical, 12)
                            .background(Color(white: 0.15))
                            .cornerRadius(8)
                        }
                    }
                    .padding(.top, 8)
                }
                .padding(24)
                .background(Color.black.opacity(0.95))
            }
        }
        .sheet(isPresented: $showingSettings) {
            ServerSettingsView(
                serverUrlString: $serverUrlString,
                isPresented: $showingSettings,
                onSave: {
                    loadFailed = false
                    webViewKey = UUID()
                }
            )
        }
    }
}

// MARK: - Server Settings View
struct ServerSettingsView: View {
    @Binding var serverUrlString: String
    @Binding var isPresented: Bool
    var onSave: () -> Void

    @State private var inputUrl: String = ""

    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("FYN Server Endpoint").foregroundColor(.gray)) {
                    TextField("http://localhost:3001 or LAN IP", text: $inputUrl)
                        .autocapitalization(.none)
                        .disableAutocorrection(true)
                        .keyboardType(.URL)
                }

                Section(header: Text("Presets").foregroundColor(.gray)) {
                    Button("Local Simulator (localhost:3001)") {
                        inputUrl = "http://localhost:3001"
                    }
                    Button("Production (https://fynindia.shop)") {
                        inputUrl = "https://fynindia.shop"
                    }
                }

                Section(footer: Text("If testing on a physical iPhone connected via Wi-Fi, replace localhost with your Mac's Local IP address (e.g. http://192.168.1.50:3001).").foregroundColor(.gray)) {
                }
            }
            .navigationBarTitle("Server Configuration", displayMode: .inline)
            .navigationBarItems(
                leading: Button("Cancel") {
                    isPresented = false
                },
                trailing: Button("Save") {
                    if !inputUrl.trimmingCharacters(in: .whitespaces).isEmpty {
                        serverUrlString = inputUrl.trimmingCharacters(in: .whitespaces)
                        onSave()
                    }
                    isPresented = false
                }
                .fontWeight(.bold)
            )
            .onAppear {
                inputUrl = serverUrlString
            }
        }
        .preferredColorScheme(.dark)
    }
}

// MARK: - WKWebView Native Container with Apple Taptic Feedback Bridge
struct WebViewContainer: UIViewRepresentable {
    let urlString: String
    @Binding var isLoading: Bool
    @Binding var loadFailed: Bool
    @Binding var errorMessage: String

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []
        
        // Register Native Apple Taptic Engine feedback script handler
        let contentController = configuration.userContentController
        contentController.add(context.coordinator, name: "haptic")

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = context.coordinator
        webView.uiDelegate = context.coordinator
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.isOpaque = false
        webView.backgroundColor = .black
        webView.scrollView.backgroundColor = .black
        webView.allowsBackForwardNavigationGestures = true

        // Native iOS Pull-to-refresh
        let refreshControl = UIRefreshControl()
        refreshControl.tintColor = .white
        refreshControl.addTarget(context.coordinator, action: #selector(Coordinator.handleRefreshControl(_:)), for: .valueChanged)
        webView.scrollView.addSubview(refreshControl)
        context.coordinator.refreshControl = refreshControl

        if let url = URL(string: urlString) {
            let request = URLRequest(url: url, cachePolicy: .useProtocolCachePolicy, timeoutInterval: 12)
            webView.load(request)
        }

        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        // No-op; state handles lifecycle
    }

    class Coordinator: NSObject, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
        var parent: WebViewContainer
        weak var refreshControl: UIRefreshControl?

        private let lightFeedback = UIImpactFeedbackGenerator(style: .light)
        private let mediumFeedback = UIImpactFeedbackGenerator(style: .medium)
        private let heavyFeedback = UIImpactFeedbackGenerator(style: .heavy)
        private let notifyFeedback = UINotificationFeedbackGenerator()

        init(_ parent: WebViewContainer) {
            self.parent = parent
            super.init()
            self.lightFeedback.prepare()
            self.mediumFeedback.prepare()
        }

        @objc func handleRefreshControl(_ sender: UIRefreshControl) {
            if let webView = sender.superview?.superview as? WKWebView {
                mediumFeedback.impactOccurred()
                webView.reload()
            }
        }

        // Native Taptic Engine message handler from Web App JS
        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            if message.name == "haptic" {
                if let style = message.body as? String {
                    DispatchQueue.main.async { [weak self] in
                        switch style {
                        case "light":
                            self?.lightFeedback.impactOccurred()
                        case "heavy":
                            self?.heavyFeedback.impactOccurred()
                        case "success":
                            self?.notifyFeedback.notificationOccurred(.success)
                        case "warning":
                            self?.notifyFeedback.notificationOccurred(.warning)
                        default:
                            self?.mediumFeedback.impactOccurred()
                        }
                    }
                }
            }
        }

        func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
            DispatchQueue.main.async {
                self.parent.isLoading = true
                self.parent.loadFailed = false
            }
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            DispatchQueue.main.async {
                self.parent.isLoading = false
                self.parent.loadFailed = false
                self.refreshControl?.endRefreshing()
            }
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            handleError(error)
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            handleError(error)
        }

        private func handleError(_ error: Error) {
            DispatchQueue.main.async {
                self.parent.isLoading = false
                self.parent.loadFailed = true
                self.parent.errorMessage = error.localizedDescription
                self.refreshControl?.endRefreshing()
            }
        }
    }
}
