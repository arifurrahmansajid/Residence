import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const ContactMap = () => {
    return (
        <div className="lg:w-[500px]">
            <MapContainer
                center={[24.8526, 89.3730]}
                zoom={14}
                scrollWheelZoom={true}
                className="h-[20vh] md:h-[30vh] lg:h-[50vh]"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="Rabby Hasan Saref"
                >
                </TileLayer>

                <Marker position={[24.8526, 89.3730]}>
                    <Popup>
                        Bogura Bangladesh
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    );
};

export default ContactMap;