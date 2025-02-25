window.onload = function(){

    // let dict = new Map();
    
    let map = [];

    console.log("aga_outer");

    async function initMap() {
        console.log("aga-inner");

        const position = [];
        const marker = [];

        position[0] = { lat: 53.662, lng: 23.815 };
        position[1] = { lat: 53.893, lng: 27.567 };
        position[2] = { lat: 64.342, lng: 34.531 };

        const { Map } = await google.maps.importLibrary("maps");
        // grodno - 53.662 - lat; 23.815 - long
        // minsk -  53.893 - lat; 27.567 - long
        // random - 64.342 - lat; 34.531 - long

        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

        for(let i=0;i<3;i++){
            console.log("aga-cycle");
            map[i] = new Map(document.getElementById(`map-realisation-${i}`), {
                zoom: 9,
                center: position[i],
                mapId: `DEMO_MAP_ID_${i}`,
            });
            marker[i] = new AdvancedMarkerView({
                map: map[i],
                position: position[i],
                title: `marker-${i}`,
            });
        }

    }
    
    initMap();
}