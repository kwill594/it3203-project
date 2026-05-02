function checkQuiz() {
    let score = 0;

    let q1 = document.getElementById("q1").value.toLowerCase();
    if (q1.includes("tim")) score++;

    if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "b") score++;

    let checks = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checks.length >= 2) score++;

    let result = document.getElementById("result");

    if (score >= 3) {
        result.innerHTML = "Score: " + score + "/5 <br><span style='color:green;'>PASS ✅</span>";
    } else {
        result.innerHTML = "Score: " + score + "/5 <br><span style='color:red;'>FAIL ❌</span>";
    }
}
