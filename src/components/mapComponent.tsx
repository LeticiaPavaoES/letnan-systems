// src/components/MapComponent.tsx
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'; // Importando o CSS necessário para o mapa

const DynamicMap = dynamic(() => import('./leafletMap'), {
  ssr: false, // Desativa a renderização no servidor para evitar o erro
});

const MapComponent = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <DynamicMap />
    </div>
  );
};

export default MapComponent;
