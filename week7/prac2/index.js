const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

const container = document.getElementById("container");

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

let count = -1; //계속 변하는 값이니까 const가 아니라 let으로 선언해야 함

async function getData(){
  // const random = Math.floor(Math.random()*100 +1);
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;
  
  count ++;
  const fetchData = await fetch(url);
  console.log(fetchData);

  const toJson = await fetchData.json();
  console.log(toJson);

  const datas = await toJson.response.body.items.item;
  console.log(datas);

  datas.map((data, i)=>{
    const list = document.createElement('div');
    list.id = 'list';

    const image = document.createElement('img');
    image.src = data.galWebImageUrl;

    const info = document.createElement('span');
    info.innerText = `  
    📸${i + 1 + 5 * count}번째 사진
    제목 : ${data.galTitle}
    장소 : ${data.galPhotographyLocation}`;

    const button = document.createElement('button');
    button.innerText = "더보기";
    // 버튼 누르면 상세정보 볼 수 있는 페이지로 이동
    button.addEventListener("click", () => {
      const queryString = `image=${data.galWebImageUrl}&title=${data.galTitle}&date=${data.galCreatedtime}&photographer=${data.galPhotographer}&keyword=${data.galSearchKeyword}`;
      window.location.href = `details.html?${queryString}`;
    });

    list.appendChild(image);
    list.appendChild(info);
    list.appendChild(button);

    container.appendChild(list);
  })
}