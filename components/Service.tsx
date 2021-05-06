import React, { FC } from "react";
import { Text, View } from "react-native";

interface ServiceProp{
    service : any
}

const Service : FC<ServiceProp> = ({service}) => {
    return (
        <View>
            <Text>{service.serviceName}</Text>
        </View>
    )
}
export default Service