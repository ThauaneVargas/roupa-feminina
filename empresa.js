function initMap() {
  // Coordenadas do endereço
  var endereco = { lat: -22.40459288198402, lng: -43.66297241059473 };

  // Opções do mapa
  var options = {
    zoom: 15,
    center: endereco
  };

  // Criação do mapa
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Marcador do endereço
  var marker = new google.maps.Marker({
    position: endereco,
    map: map,
    title: 'R. Manoel Tomé da Rocha, 129 - Centro, Vassouras - RJ, 27700-000'
  });
}


function toggleSearchBox() {
  var searchBox = document.getElementById("search-input");
  searchBox.classList.toggle("show-search");
}
