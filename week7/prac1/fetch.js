// const url = './data/data.json';
// const container = document.getElementById('container'); 이미 fetch에서 전역변수 선언했기 때문에 삭제

const fetchData = () =>{
  while(container.firstChild){
    container.removeChild(container.firstChild); //모두 불러오기 버튼 여러 번 눌러도 한 번만 나오게 첫번째 자식 요소 삭제
  }
  fetch(url)
  .then(response=>{
    return response.json()
  })
  .then((response)=>{
    console.log(response.frontend); //배열만 출력하기 위해 .frontend 추가
    const datas = response.frontend; //frontend 변수 설정
    
    datas.map((data)=>{
      const list = document.createElement('div');
      list.innerHTML = `제 이름은 ${data.name}입니다.
      저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다~`;

      container.appendChild(list);
      console.log(data);
    })
  })
}