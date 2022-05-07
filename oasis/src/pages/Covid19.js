import React from 'react'
import './Covid19.css'

function Covid19() {
    return (
        <div className="cov-container">
            <div className="cov-div">
                <p className="cov-head">About COVID-19</p>
                <p className="cov-content">COVID-19 (Coronavirus Disease 2019) is a disease caused by a virus named SARS-CoV-2 and was discovered in December 2019 in Wuhan, China. It is very contagious and has quickly spread around the world.<br/><br/>
                    COVID-19 most often causes respiratory symptoms that can feel much like a cold, a flu, or pneumonia. COVID-19 may attack more than your lungs and respiratory system. Other parts of your body may also be affected by the disease.<br/>
                    <ul><li>Most people with COVID-19 have mild symptoms, but some people become severely ill.</li>
                    <li>Some people including those with minor or no symptoms may suffer from post-COVID conditions — or “long COVID”.</li>
                    <li>Older adults and people who have certain underlying medical conditions are at increased risk of severe illness from COVID-19.</li>
                    <li>Hundreds of thousands of people have died from COVID-19 in the United States.</li>
                    <li>Vaccines against COVID-19 are safe and effective. Vaccines teach our immune system to fight the virus that causes COVID-19.</li></ul>
                </p>
            </div>
            <div className="graph-frame">
                <iframe src="https://public.domo.com/cards/bWxVg" width="70%" height="600" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"></iframe>
            </div>
            <div className="cov-div">
                <p className="cov-head">Preventive Measures</p>
                <p className="cov-content">
                    <ul>
                        <li>COVID-19 vaccines are effective at preventing you from getting sick. COVID-19 vaccines are highly effective at preventing severe illness, hospitalizations, and death. Getting vaccinated is the best way to slow the spread of SARS-CoV-2, the virus that causes COVID-19.</li>
                        <li>Everyone ages 2 years and older should properly wear a well-fitting mask indoors in public in areas where the COVID-19 Community Level is high, regardless of vaccination status.</li>
                        <li>Inside your home: Avoid close contact with people who are sick, if possible. If possible, maintain 6 feet between the person who is sick and other household members. If you are taking care of someone who is sick, make sure you properly wear a well-fitting mask and follow other steps to protect yourself.</li>
                        <li>Avoid poorly ventilated spaces and crowds.</li>
                        <li>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing. If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry. Avoid touching your eyes, nose, and mouth with unwashed hands.</li>
                        <li>Cover coughs and sneezes.</li>
                        <li>Take precautions when you travel</li>
                        <li>Clean high touch surfaces regularly or as needed and after you have visitors in your home. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks. If someone is sick or has tested positive for COVID-19, disinfect frequently touched surfaces.</li>
                        <li>Be alert for symptoms: Watch for fever, cough, shortness of breath, or other symptoms of COVID-19. Take your temperature if symptoms develop. Monitoring symptoms is especially important if you are running errands, going into the office or workplace, and in settings where it may be difficult to keep a physical distance of 6 feet.</li>
                        <li>In case you experience symptoms, get yourself tested to prevent spread to others.</li>
                        <li>If you come into close contact with someone with COVID-19: follow CDC’s recommendations for quarantine.</li>
                    </ul>
                </p>
            </div>
            <div className="graph-frame">
                <iframe src="https://public.domo.com/cards/31O7r" width="70%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
            </div>
        </div>
    )
}

export default Covid19