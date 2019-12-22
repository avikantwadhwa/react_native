import {action,observable} from 'mobx';
import { setLightEstimationEnabled } from 'expo/build/AR';

class ObservableStore{

    @observable list=[]

    @action listmethod(val){
        this.list.push(val)
    }
}
