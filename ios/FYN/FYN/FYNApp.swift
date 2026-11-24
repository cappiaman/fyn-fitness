import SwiftUI

@main
struct FYNApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(.dark)
                .background(Color.black.ignoresSafeArea())
        }
    }
}
