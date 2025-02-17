'use client'

import React from 'react'
import IKImage from "imagekitio-next"

const urlEndPoint = process.env.NEXT_IMAGEKIT_PUBLIC_URL_ENDPOINT;

export default Imgr = (props) => {
    return (
        <IKImage
            urlEndPoint={urlEndPoint}
            {...props}
        />
    );
}

