const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = Number(document.getElementById("age").value);

    const service = document.getElementById("class").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (name === "") {
        alert("กรุณากรอกชื่อ-นามสกุล");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        alert("กรุณากรอกเบอร์โทรศัพท์");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("กรุณากรอกเบอร์โทรศัพท์ 10 หลัก");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("กรุณากรอก Email");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("กรุณากรอก Email ให้ถูกต้อง");
        return;
    }


    if (!age) {
        alert("กรุณากรอกอายุ");
        return;
    }

    if (age < 15 || age > 100) {
        alert("กรุณากรอกอายุให้ถูกต้อง (15-100 ปี)");
        return;
    }

    if (service === "") {
        alert("กรุณาเลือกคลาสออกกำลังกาย");
        return;
    }

    if (date === "") {
        alert("กรุณาเลือกวันที่ต้องการเข้าเรียน");
        return;
    }

    const selectedDate = new Date(date);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert("กรุณาเลือกวันที่ปัจจุบันหรือวันที่ในอนาคต");
        return;
    }

    if (time === "") {
        alert("กรุณาเลือกช่วงเวลาเข้าเรียน");
        return;
    }

    const experience =
        document.querySelector('input[name="experience"]:checked');

    if (!experience) {
        alert("กรุณาเลือกระดับประสบการณ์");
        return;
    }

    const confirm = document.getElementById("confirm").checked;

    if (!confirm) {
        alert(
            "กรุณายืนยันข้อมูลและรับทราบว่าการส่งแบบฟอร์มยังไม่ถือเป็นการยืนยันสิทธิเข้าเรียน"
        );
        return;
    }

    alert("ส่งข้อมูลการจองเรียบร้อยแล้ว");
    form.reset();
});