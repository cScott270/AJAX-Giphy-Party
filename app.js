const $form = $("#form");
const $input = $("#text")
const $container = $("#container")

$form.on("submit", async function(e) {
  e.preventDefault();
  const search = $input.val();
  $input.val('');
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: search,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  getGif(response.data)
});

async function getGif(res) {
  const num = res.data.length
  const rand = Math.floor(Math.random() * num);
  let $newGif = $("<img>", {
    src: res.data[rand].images.original.url
  })
  $container.append($newGif);
}

$(".clear").on("click", function() {
  $container.empty();
})