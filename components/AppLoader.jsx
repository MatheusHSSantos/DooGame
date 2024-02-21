import { View, Modal, ActivityIndicator } from 'react-native'

export default function AppLoader({ visible }) {
    return (
        <Modal transparent visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator
                    size="large"
                    color={'#ffffff'}
                    animating={true}
                />
            </View>
        </Modal>
    )
}