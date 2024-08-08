import "./main.css";

function App() {

  return (
    <>
      <main>
        <div className="maincontainer">
          <h1>2024 파리 올림픽</h1>
          <form className="input-group">
            <div className="country-input-filed">
              <label>국가명</label>
              <input type="text" name="countryname" id="countryname" placeholder="국가 입력" />
            </div>
            <div className="gold-input-filed">
              <label>금메달</label>
              <input type="number" name="goldMedalNumber" id="goldMedalNumber" placeholder="금메달 갯수를 입력해주세요" />
            </div>
            <div className="silver-input-filed">
              <label>은메달</label>
              <input type="number" name="silverMedalNumber" id="silvergoldMedalNumber" placeholder="은메달 갯수를 입력해주세요" />
            </div>
            <div className="bronze-input-filed">
              <label>동메달</label>
              <input type="number" name="bronzeMedalNumber" id="bronzegoldMedalNumber" placeholder="동메달 갯수를 입력해주세요" />
            </div>
            <div className="bronze-input-filed">
              <label>동메달</label>
              <input type="number" name="bronzeMedalNumber" id="bronzegoldMedalNumber" placeholder="동메달 갯수를 입력해주세요" />
            </div>
            <button className="inputcontainer">국가 추가</button>
            <button className="inputcontainer">업데이트</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App;
