import {B as e} from "./main-a6347118.js";
import {D as t} from "./DarkTheme-2fd54461.js";
class o {
    constructor() {
        this._api = new e,
        this._timer = setInterval(()=>{
            this.Refresh()
        }
        , 3e4)
    }
    Refresh() {
        navigator.onLine && this._div && this._api.loadSponsorTile(t.enabled ? "dark" : "light", this._name, i=>{
            i ? (this._div.fadeOut(500, ()=>{
                this._div.html(i),
                this._div.fadeIn(500)
            }
            ),
            this._div.show()) : this._div.hide()
        }
        )
    }
    loadSponsorTile(i, s) {
        this._name = i,
        this._div = s,
        this.Refresh()
    }
}
export {o as S};
