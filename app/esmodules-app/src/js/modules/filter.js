import SELECT from "./select";

export default async function (btnArray, url, UI, PATCH, DELETE, COMPLETE) {
	btnArray.forEach(btn => {
		btn.addEventListener("click", () => {
			let filterURL;
			UI.listsBlock.innerHTML = "";

			const url1 = "http://localhost:8888/history"
			let flag

			if (btn.dataset.filter === "filterComplete") {
				filterURL = `${url}?isComplete=true`;
				flag = false
			} else if (btn.dataset.filter === "filterUnComplete") {
				filterURL = `${url}?isComplete=false`;
				flag = false
			} else if (btn.dataset.filter === "filterAll") {
				filterURL = url;
				flag = false
			}else if (btn.dataset.filter === "archive"){
				filterURL = url1
				flag = true
			}

			fetch (filterURL)
			.then(data => data.json())
			.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete,flag?flag:"")))
			.then(() => SELECT(PATCH, DELETE, COMPLETE, url));
		});
	});
}