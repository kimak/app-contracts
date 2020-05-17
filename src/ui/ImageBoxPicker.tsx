import React, { useState, useCallback } from 'react'
import { ImageBoxProps, ImageBox } from './ImageBox'
import { Menu } from 'react-native-paper'
import { ImagePicker, ImagePickerResult, ImageInfo } from '../sdk/ImagePicker'

export type ImageBoxPickerProps = {
    onFinish?: (imageInfo: ImageInfo) => void
} & ImageBoxProps

export const ImageBoxPicker = ({
    icon,
    label,
    onPress,
    onFinish,
    ...rest
}: ImageBoxPickerProps) => {
    const [visible, setVisible] = useState(false)
    const [imageUri, setImageUri] = useState<string>()

    const updateResult = (result: ImagePickerResult) => {
        if (!result?.cancelled && result?.uri) {
            setImageUri(result.uri)
            if (onFinish) onFinish(result)
        }
        setVisible(false)
    }
    return (
        <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
                <ImageBox
                    label={label}
                    icon={icon}
                    onPress={() => setVisible(true)}
                    image={imageUri}
                    {...rest}
                />
            }
        >
            <Menu.Item
                onPress={async () => {
                    const result = await ImagePicker.takePhoto()
                    updateResult(result)
                }}
                title="Take a photo"
            />
            <Menu.Item
                onPress={async () => {
                    const result = await ImagePicker.pickImage()
                    updateResult(result)
                }}
                title="From gallery"
            />
        </Menu>
    )
}
