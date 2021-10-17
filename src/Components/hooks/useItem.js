import { useEffect, useState } from "react"

const useItem = () => {
    let newArray = [];

    const [data, setData] = useState([]);
    const [shopping, setShopping] = useState([]);
    console.log("1st", shopping)
    const addtoCart = (name, price, img) => {
        var obj = {};
        obj.name = name;
        obj.quantity = 1;
        obj.img = img;
        obj.price = price;

        // if (newArray.length !== 0) {
        //     console.log("length 0 na");

        // }
        if ((shopping.length !== 0) && (shopping.map(item => item.name === name))) {
            console.log("lengt 0 na")

            for (const item of shopping) {
                console.log("for a geche")

                if (item.name === name) {

                    item.quantity += 1;
                    console.log(item.quantity)
                }
            }

        } else {
            // newArray.push(obj);
            setShopping(obj)
        }
        if (shopping.length === 0) {
            // newArray.push(obj)
            console.log("1st");
            setShopping([obj])

        }



    }



    useEffect(() => {
        fetch("https://k17h02.github.io/api/all.json").then(response => {

            return response.json();
        }).then(data => {
            setData(data)
        }).catch(err => {

            console.log("Error Reading data " + err);
        });
    }, [])

    return { data, addtoCart, shopping }
}
export default useItem;