const pic = ["image/Card_front/RockPara.png", "image/Card_front/InsideRock.png", "image/Card_front/SunEnergyDrink.png", "image/Card_front/SubwaySurf.png", "image/Card_front/Omamori.png", "image/Card_front/LittleSalty.png"]
const predict = {
    "stoneFall": "ในสิ่งที่คุณพยายามทำเพื่อช่วยเหลือผู้อื่นจะไม่ค่อยส่งผลประโยชน์ซักเท่าไหร่เหมือนการใส่ร่มชูชีพให้หินที่ตกลงมาก็ไม่สามารถช่วยอะไรหินได้อยู่ดี",
    "insStone": "คุณติดอยู่ในปัญหาที่ค่อนข้างเป็นเรื่องส่วนตัว อาจเริ่มจากเรื่องเล็กแต่ถูกทิ้งไว้จนตอนนี้บานปลาย จนไม่สามารถให้ผู้อื่นเข้ามาช่วยเหลือได้ หรือช่วยเหลือได้เพียงผิวเผิน เสมือนกับถูกขังอยู่ในหินอย่างมิดชิดจนผู้อื่นไม่สามารถยื่นมือเข้ามาช่วยได้",
    "SunEnrDrink": "คุณกำลังทุ่มเทอยู่กับสิ่งที่คุณรักหรือสนุกกับมัน คุณถวายทั้งแรงกายและจิตใจให้กับมัน คุณได้ผลลัพธ์ที่ดีแต่ก็แลกมาด้วยความเหนื่อยล้า เปรียบได้กับเครื่องดื่มชูกำลังที่ทำให้เราเดินหน้าทำงานต่อได้ แต่เมื่อทานมากๆ เข้าก็เกิดผลเสีย ในสถานการณ์นี้เราแนะนำคุณพักผ่อนให้เพียงพอ",
    "goForIt": "สิ่งที่คุณกำลังจะทำหรือทำอยู่จะดำเนินต่อไปอย่างราบรื่น และสนุกสนาน เหมือนกับเด็กในเกม Subway Surfers ที่เก็บ Booster เพิ่มความเร็วทำให้วิ่งได้อย่างรวดเร็ว และไม่มีอะไรหยุดเขาได้",
    "Omamori": "Omamori เป็นเครื่องรางนำโชคของญี่ปุ่น เราขอภาวนาให้คุณโชคดี มีวันที่สวยงาม พบเจอกับผู้คนดีๆ และขอปิดท้ายด้วยแคล้วคลาดปลอดภัย",
    "salty": "ในวันนี้คุณจะพบเจอกับโชคดีเล็กน้อยๆ เป็นเรื่องเล็กที่ทำให้คุณยิ้ม และมีความสุข เหมือนกับทุกๆ ครั้งที่คุณสะสมเศษเกลืออันน้อยๆ ไปเรื่อยจนสุ่มกาชาได้สำเร็จ"
}
const card = ["stoneFall", "insStone", "SunEnrDrink", "goForIt", "Omamori", "salty"]
const random = "";
window.onload = () => {
    const random = Math.floor(Math.random() * card.length);
    document.getElementById("cardPic").src = pic[random];
    document.getElementById("result").innerHTML = predict[card[random]];
}
