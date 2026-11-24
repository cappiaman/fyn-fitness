# FYN — Apple iOS (iPhone & iPad) Application

This directory contains the native Apple iOS implementation of **FYN — Health & Performance OS**, built using Apple's modern **SwiftUI** and **WebKit**, with full support for Apple Taptic Engine haptics, dynamic safe-area insets (Dynamic Island / Notch), camera nutritional scanning, and offline caching.

---

## 📱 Two Ways to Run on Your iPhone

### Option 1: Instant Standalone iPhone App (No Apple Developer Account Needed)
FYN is fully configured as a high-performance **iOS Progressive Web App (PWA)**:

1. On your iPhone, open **Safari**.
2. Navigate to your FYN URL:
   - Over your local home Wi-Fi: `http://<YOUR_MAC_IP>:3001` (Find your Mac's IP in System Settings → Network → Wi-Fi).
   - Or your production domain: `https://fynindia.shop`
3. Tap the **Share button** at the bottom (the square with an arrow pointing up: `⎋`).
4. Scroll down and tap **"Add to Home Screen"** (`+`).
5. Tap **Add** in the top right corner.
6. The official monochrome **FYN** icon (`✦`) will appear on your iPhone Home Screen.
7. Tap the icon to launch: it opens in **true standalone mode** (no Safari URL bar, full edge-to-edge display, black-translucent status bar, and camera access).

---

### Option 2: Native Xcode iOS App (`ios/FYN.xcodeproj`)
The native project is located in `ios/FYN/`.

#### Features of the Native App:
- **Native Apple Taptic Engine Feedback**: Haptic pulses on checking workout sets, rest timer countdown alerts, and meal logging via `UIImpactFeedbackGenerator`.
- **Dynamic Island & Safe Area Support**: Seamless edge-to-edge frosted glass aesthetic without any content clipping under the notch or home indicator.
- **Native Pull-to-Refresh**: Native `UIRefreshControl` with white styling matching the monochrome theme.
- **Native Camera & Photo Library Bridge**: Pre-configured `Info.plist` permissions for AI food dish analysis and Garmin OCR.
- **Configurable Server Endpoint**: Built-in Settings sheet to switch between `localhost:3001`, your local Mac Wi-Fi IP, and `https://fynindia.shop`.

#### How to Build & Install on Your iPhone:
1. Double-click [ios/FYN/FYN.xcodeproj](file:///Users/cappiaman/Downloads/travel%20website%20/ios/FYN/FYN.xcodeproj) to open it in **Xcode**.
2. In Xcode:
   - Connect your iPhone to your Mac via USB cable or Wi-Fi.
   - In the target device selector at the top (next to "FYN"), select your **iPhone** (or any iPhone 16 / 15 Simulator).
   - In the project settings under **Signing & Capabilities**, select your **Personal Team** (Free Apple ID account).
3. Press **Command + R** (or click the **Play ▶** button).
4. The FYN app will compile and install directly onto your iPhone!
