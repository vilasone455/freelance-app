import React, { useEffect, useState } from 'react';
import { Block } from "galio-framework";
import { Button, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ServiceComponent from "../components/Service";
import { fetchServiceAsync } from "../reducer/service/thunk";
import { RootState } from "../store";
import Loading from '../components/Loading';

export const ServicePage = () => {

    const [isLoading, setisLoading] = useState(false)
    const dispatch = useDispatch()
    const services = useSelector((state: RootState) => state.ServiceReducer.services)

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
        setisLoading(true)
        await dispatch(fetchServiceAsync())
        setisLoading(false)
    }
    
    return (
      <Block>
          {services.map(s=>{
              return (<ServiceComponent key={"service"+s.id} service={s} />)
          })}
          {isLoading && <Loading/>}
          
      </Block>
    );
};