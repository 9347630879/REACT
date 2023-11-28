
import { getProduct } from "../services/Product.service";

export function Form() {




    function sai() {
        let obj = {
            "name": document.getElementById("ordername").value,
            "price": document.getElementById("orderprice").value
        }
        getProduct(obj).then((res) => {
            getProduct(res.data);
        }
        );
    }





    return (
        <div>
            <form className="m-3">
                <div className="form-group">
                    <label>name</label>
                    <input type="text" className="form-control" id="ordername"></input>
                </div>
                <div className="form-control">
                    <label>price</label>
                    <input type="text" className="form-control" id="orderprice"></input>
                </div>
                <div>
                    <input type="button" value="save" className="btn btn-primary"
                        onClick={() => { sai() }}></input>
                    <input type="reset" value="cancel" className="btn btn-secondary ms-2"></input>
                </div>

            </form>
        </div>
    )
}