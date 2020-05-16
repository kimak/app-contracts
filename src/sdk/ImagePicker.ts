import * as ExpoImagePicker from 'expo-image-picker'
import { Permissions } from './Permissions'

export type ImageInfo = {
    uri: string
    width: number
    height: number
    type?: 'image' | 'video'
    exif?: {
        [key: string]: any
    }
    base64?: string
}

export type ImagePickerResult =
    | {
          cancelled: true
      }
    | ({
          cancelled: false
      } & ImageInfo)
    | undefined

const takePhoto: () => Promise<ImagePickerResult> = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
        Permissions.CAMERA
    )
    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted') {
        const pickerResult = await ExpoImagePicker.launchCameraAsync({
            // base64: true,
            allowsEditing: true,
            aspect: [4, 3],
        })
        return pickerResult
    }
    return undefined
}

const pickImage: () => Promise<ImagePickerResult> = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
    )
    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
        const pickerResult = await ExpoImagePicker.launchImageLibraryAsync({
            // base64: true,
            allowsEditing: true,
            aspect: [4, 3],
        })
        return pickerResult
    }
    return undefined
}

export const ImagePicker = {
    pickImage,
    takePhoto,
}
