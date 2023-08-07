console.log("Let's get this party started!");

const $searchTerm = $("#search-term");
const $resultList = $("#result-list");

console.log($searchTerm);

$("form").on("submit", async function(e) {
    e.preventDefault();
    let searchTerm = $searchTerm.val();
    console.log(`Search term -> ${searchTerm} `);
    clearForm();
    // get gif
    const result = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      limit: 5,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
    });
    addGIF(result.data);
});

function addGIF( res ){
    //const data = res.data;
    console.log(res.data);
    for (let x of res.data){
        console.log(x["embed_url"]);
        let i = document.createElement("img");
        i.setAttribute("src", x["embed_url"] );

        const newLine = document.createElement("li");
        newLine.append(i);

		$resultList.append(newLine);
    }

}




function clearForm() {
    $searchTerm.val("");
    return true;
}