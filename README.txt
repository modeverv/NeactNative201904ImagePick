react-native init proj

npm --save install react-native-picker@latest

react-native link react-native-picker

@info.plist
    <key>NSPhotoLibraryUsageDescription</key>
    <string>$(PRODUCT_NAME) would like access to your photo gallery</string>
    <key>NSCameraUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to use your camera</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to save photos to your photo gallery</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to your microphone (for videos)</string>



@AndoroidManifest.xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

