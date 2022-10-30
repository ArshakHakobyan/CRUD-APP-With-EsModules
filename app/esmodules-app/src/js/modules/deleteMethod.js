export default async function (removeBtnArray, url) {
	const url1 = "http://localhost:8888/history"
				
	removeBtnArray.forEach(btn => {
		btn.addEventListener("click", async () => {
			const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);

			const modalBtns = document.querySelectorAll(".modalBtns")
			const modalWrapper = document.querySelector(".modal_menu")
			modalWrapper.style.display = "flex"

			modalBtns.forEach(btns => {
				btns.addEventListener("click", async function btn (e){
					if(e.target.textContent === "Yes"){
						//btn.parentElement.parentElement.remove();
						await fetch(`${url}/${fakeID}`)
						.then(data => data.json())
						.then(data => {
						fetch(url1, {
							method: "POST",
							headers: {
								"content-type": "application/json"
							},
							body: JSON.stringify(data)
					});
					
				})
						await fetch(`${url}/${fakeID}`, {
							method: "DELETE"
						});
					}else{
						modalWrapper.style.display = "none"
						
					}
				})
			})
			
				

			
				
		});
	})
}