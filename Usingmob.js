import {action,observable, computed} from 'mobx';
import { setLightEstimationEnabled } from 'expo/build/AR';

class ObservableStore{

    @observable list=[]

    @action listmethod(val){
        this.list.push(val)
    }
    
}
const observableStore = new ObservableStore();
export default observableStore;