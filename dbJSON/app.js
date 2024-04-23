const getDatas = async (url) => {
  let res = await axios(url);
  let data = res.data;
  return data;
};

const postDatas = async (url, obj) => {
  let res = await axios.post(url, obj);
  let data = res.data;
  return data;
};

const getDataById = async (url, id) => {
  let res = await axios(url + "/" + id);
  let data = res.data;
  return data;
};

const deleteById = async (url, id) => {
  let res = await axios.delete(url + "/" + id);
  let data = res.data;
  return data;
};

const putById = async (url, id, obj) => {
  let res = await axios.put(url + "/" + id, obj);
  let data = res.data;
  return data;
};

const patchById = async (url, id, obj) => {
  let res = await axios.patch(url + "/" + id, obj);
  let data = res.data;
  return data;
};

const tbody = document.querySelector(".tbody");
const getdata = document.querySelector(".getdata");

function createTable(data) {
  data.forEach((element) => {
    tbody.innerHTML += `
        <tr>
        <th scope="row">${element.id}</th>
        <td>${element.title}</td>
        <td>${element.price}</td>
        <td>${element.category}</td>
        <td><button class="btndel">x</button></td>

      </tr>
        `;
  });
}

getdata.addEventListener("click",()=>{
  getDatas("http://localhost:3000/products").then((data) => createTable(data))
}
 
);

const btndel=document.querySelectorAll(".btndel")

btndel.addEventListener("click",(e)=>{
  deleteById("http://localhost:3000/products",element.id)
})
