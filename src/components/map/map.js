import React from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'

class MyMap extends React.Component {
    constructor() {
        super();

        this.state = {
            lat: 50.95715,
            lng: -0.14416,
            zoom: 16,
          }
    }
   
    render () {
        const position = [this.state.lat, this.state.lng];

        if (typeof window !== 'undefined') {
            return (
                <Map center={position} zoom={this.state.zoom}
                style={{height: "400px", marginBottom: "2rem"}}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    <h1 className="">BHBC Club House</h1>
                        <p className="has-text-grey-dark">
                            Westhill Dr
                            Burgess Hill
                            RH15 9PP
                        </p>
                    </Popup>
                </Marker>
            </Map>
            ) 
        }
        return null
    }
}

export default MyMap;

/*

         <Map center={position} zoom={this.state.zoom}
                        style={{height: "400px", marginBottom: "2rem"}}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                            <h1 className="">BHBC Club House</h1>
                                <p className="has-text-grey-dark">
                                    Westhill Dr
                                    Burgess Hill
                                    RH15 9PP
                                </p>
                            </Popup>
                        </Marker>
                    </Map>

                */