import React, { useEffect, useState } from 'react';
import { Block, Card } from "galio-framework";
import theme from "../theme.js"

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import Loading from '../components/Loading';
import { fetchJobsAsync } from '../reducer/post/thunk';
import PostComponent from '../components/Post'
import {
    ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
  } from 'react-native';

const { width } = Dimensions.get('screen');

export const JobPage = () => {

    const [isLoading, setisLoading] = useState(false)
    const dispatch = useDispatch()
    const jobs = useSelector((state: RootState) => state.PostReducer.post)

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
        setisLoading(true)
        await dispatch(fetchJobsAsync())
        setisLoading(false)
    }
    
    return (
      <Block>
          {jobs.map(j=>{
              return (<Card
                id={"job" + j.id}
                flex
                borderless

                title={j.title}
                caption="139 minutes ago"
                location="Los Angeles, CA"
                avatar="http://i.pravatar.cc/100?id=skater"
                image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
              />)
          })}
          
          
      </Block>
    );
};

