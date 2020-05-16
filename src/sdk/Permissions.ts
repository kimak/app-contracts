import * as ExpoPermissions from 'expo-permissions'

type PermissionType = ExpoPermissions.PermissionType

const permissions = {
    CAMERA_ROLL: ExpoPermissions.CAMERA_ROLL as PermissionType,
    CAMERA: ExpoPermissions.CAMERA as PermissionType,
}

export const Permissions = {
    askAsync: ExpoPermissions.askAsync,
    ...permissions,
}
