(function() {
    const memberIdInput = document.getElementById('member-id')
    memberIdInput.addEventListener('keyup', () => {
        if (memberIdInput.value.length < 1) {
            document.body.id = ""
        }
    })
})()