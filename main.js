let body = document.querySelector('body')
    let btn = document.querySelector('#submit');
    let division = document.querySelector('#division')
    btn.addEventListener('click', ()=>{
        let divi = division.value
         
        
        body.innerHTML = ''
        body.style.backgroundColor = 'blue'
        body.innerHTML = `<p id="cityName">Dhaka</p>
        <br>
        <p id="date"></p>
        <p id="cencious">31°</p>
    
    
        <span class="material-symbols-outlined" id="cloud">
            cloud
            </span><p id="status">Cloudy</p>
        <img src="./image/city4.png" class="img" alt="">
        <div id="footer">
             <p class="demo">Weather : </p>
    
    
    
    
            <div class="temp1"><span class="material-symbols-outlined"  id="one">
                thermostat
                </span></div><p id="temperature">Temperature</p>
                <p id="status-temp01">31°</p>
    
    
    
            <div class="wind"><span class="material-symbols-outlined" id="two">
                air
                </span> </div><p id="wind">Wind</p><p id="status-wind">7km/h</p>
    
    
         
         
            <div class="temp02"><span class="material-symbols-outlined" id="three">
                thermostat
                </span></div><p id="temperature02">Max Temperature</p><p id="status-temp02">30°</p>
    
    
    
    
            <div class="water"><span class="material-symbols-outlined" id="four">
                
                    more_horiz
                    
                </span></div><p id="des">Description</p><p id="status-des">Patchy rain possible</p>
         
        </div>`
        let stickers = document.querySelector('.material-symbols-outlined')
        let cencious = document.querySelector('#cencious')
        let cityName = document.querySelector('#cityName')
        let statustemp01 = document.querySelector('#status-temp01')
        let wind = document.querySelector('#status-wind')
        let des = document.querySelector('#status-des')
        let status = document.querySelector('#status')
        let date = document.querySelector('#date')
        let one = document.querySelector('#one')
        let two = document.querySelector('#two')
        let three = document.querySelector('#three')
        let four = document.querySelector('#four')
        one.style.fontSize = '30px'
        two.style.fontSize = '30px'
        three.style.fontSize = '30px'
        four.style.fontSize = '30px'
        four.style.marginLeft = '17px'
        cityName.textContent = divi;
        let p = fetch(`https://goweather.herokuapp.com/weather/${divi}`);
        p.then((value)=>{
            console.log(value.status)
            console.log(value.ok)
            return value.json()
        }).then((value)=>{
            console.log(value)
            //convert obj to array
            let entries = Object.entries(value);
            //convert array to str
            //let ent = entries.toString()
            console.log(entries)
             
             
            //temp
            let temp = entries[0][1]
            cencious.textContent = temp
            statustemp01.textContent = temp
            wind.textContent = entries[1][1]
            des.textContent = entries[2][1]
            status.textContent = entries[2][1]
            date.textContent = new Date().toDateString()
             
        })
    })