import "./main.css";

function App() {

  return (
    <>
      <main>
        <div className="maincontainer">
          <h1>2024 파리 올림픽</h1>
          <div className="country">
            국가명
            <input type="text" name="countryname" id="countryname" placeholder="국가 입력" />
          </div>
          <div className="gold">금메달
            <input type="number" name="goldMedalNumber" id="goldMedalNumber" placeholder="금메달 갯수를 입력해주세요" />
          </div>
          <div className="silver">은메달
            <input type="number" name="silverMedalNumber" id="silvergoldMedalNumber" placeholder="은메달 갯수를 입력해주세요" />
          </div>
          <div className="bronze">동메달
            <input type="number" name="bronzeMedalNumber" id="bronzegoldMedalNumber" placeholder="동메달 갯수를 입력해주세요" />
          </div>
          <button className="inputcontainer">국가 추가</button>
          <button className="inputcontainer">업데이트</button>
        </div>
      </main>
    </>
  )
}

export default App;
