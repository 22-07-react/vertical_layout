//브라우저에 모든 소스들이 로딩완료되면 
window.addEventListener("load", ()=>{
    //isotope 플러그인 호출 구문 
    const grid = new Isotope("section", { //배치할 요소의 부모요소 
        itemSelector : "article", //배치할 요소명 
        columnWidth: "article", //너비값을 구할 기준 요소명 
        transitionDuration: "0.8s" //화면 재배치시 요소가 움직이는 속도 
    }); 


    //소팅버튼을 변수로 저장 
    const btns = document.querySelectorAll("main ul li"); 

    //버튼의 갯수만큼 반복을 돌면서 이벤트 연결 
    for(let el of btns){
        //버튼을 클릭했을 때 
        el.addEventListener("click", e=>{
            e.preventDefault(); //링크이동방지 

            //클릭한 버튼의 자식인 a의 href값을 구해서 변수로 저장 
            const sort = e.currentTarget.querySelector("a").getAttribute("href"); 

            grid.arrange({
                filter:sort  //변수의 값대로 필터링 
            }); 

            //순간적으로 반복을 돌면서 모든 버튼의 on을 제거 - 비활성화 
            for(let el of btns){
                el.classList.remove("on"); 
            }
            //클릭한 버튼에 on 추가 - 활성화 
            e.currentTarget.classList.add("on"); 

        })
    }
})
