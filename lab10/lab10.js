const a = 10;
const b = 0;
try {
    if (b === 0) { throw new Error('thuc hien chia cho 0') }
    a / b

} catch (error) { console.log("có lỗi xay ra", error) }
finally { console.log("finiiishhhh") }
