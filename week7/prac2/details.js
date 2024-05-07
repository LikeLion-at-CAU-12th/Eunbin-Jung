const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";
const container = document.getElementById("container");


//URL의 쿼리 스트링 부분을 반환하여 데이터 추출
const urlParams = new URLSearchParams(window.location.search);

const imageUrl = urlParams.get("image");
const title = urlParams.get("title");

const date = urlParams.get("date");
const year = date.substring(2, 4).padStart(2, '0');
const month = date.substring(4, 6).padStart(2, '0');
const day = date.substring(6, 8).padStart(2, '0');

const photographer = urlParams.get("photographer");
const keyword = urlParams.get("keyword");


//데이터 출력
const option = {
  serviceKey:
    "G%2FbsC7xgzNTc8TzbcaNz0jeZ0CUvE8HB3rUTN7069PrIQ9hVvIqbAkOfauW%2F2X%2FR15%2FEL5eSOUvOlAZ659dn3w%3D%3D",
  numofRows: 5,
  MobileApp: "test",
  MobileOS: "ETC",
  arrange: "A",
  _type: "json",
  pageNo : 1
};

async function getDetails(){
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;

  const fetchData = await fetch(url);
  console.log(fetchData);

  const toJson = await fetchData.json();
  console.log(toJson);

  const datas = await toJson.response.body.items.item;
  console.log(datas);


  const image = document.createElement('img');
  image.src = imageUrl;

  const info = document.createElement('span');
  info.innerText = `
    제목 : ${title}
    날짜 : ${year}/${month}/${day}
    촬영자 : ${photographer}
    키워드 : ${keyword}`;

  
  container.appendChild(image);
  container.appendChild(info);
}


