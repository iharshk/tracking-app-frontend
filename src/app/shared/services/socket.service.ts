import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import {​​​​​​​​ environment }​​​​​​​​ from'../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export  class SocketService implements OnInit {

  // private socket: SocketIOClient.Socket;

  constructor() {
   }

   ngOnInit(){

    // this.socketconnect();
    // this.getLocation( );
   }

   getLocation(x /** x = document.getElementById("demo"); */) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    showPosition(position) {
      // this.x.innerHTML = "Latitude: " + position.coords.latitude +
      // "<br>Longitude: " + position.coords.longitude;
    }

  socketconnect() {
    // this.socket = io.connect(environment.backendUrl);
    // this.socket.emit('userconnect', {​​​​​​​​ user_id: "harsh", action:'socket connection' }​​​​​​​​);

  }
}















 

 /**

 
getCommercial(userId) {​​​​​​​​
this.globalObj.socketClose=false;
this.socket=io.connect(environment.orchestrationUrl);
 
this.socket.emit('userconnect', {​​​​​​​​ user_id:userId, action:'score' }​​​​​​​​);
this.socket.on('commercial_'+userId, (data) => {​​​​​​​​
if (data&&data.headerStatus==200&&data.statusText=='success') {​​​​​​​​
if (data.data&&data.data.user_id) {​​​​​​​​
// console.log(data.data)
if (data.data.error) {​​​​​​​​
this.common.popToast('error', 'Error', data.data.error);
clearInterval(this.interval);
clearTimeout(this.timeout);
this.socket.disconnect();
 }​​​​​​​​ else {​​​​​​​​
this.referenceSave(data.data);
this.socket.disconnect();
 }​​​​​​​​
 }​​​​​​​​ elseif (data.data&&!data.data.data) {​​​​​​​​
this.interval=setInterval(() => {​​​​​​​​
this.reCallSocket(userId);
 }​​​​​​​​, 10000);
 }​​​​​​​​ elseif (data.data.error) {​​​​​​​​
this.common.popToast('error', 'Error', 'Unable to pull commercial. Please try after sometime.');
this.deleteCommercialData('delete_com_record');
clearTimeout(this.timeout);
clearInterval(this.interval);
this.socket.disconnect();
 }​​​​​​​​ else {​​​​​​​​
this.interval=setInterval(() => {​​​​​​​​
this.reCallSocket(userId);
 }​​​​​​​​, 10000);
 }​​​​​​​​
 }​​​​​​​​ elseif (data&&data.statusText=='failed') {​​​​​​​​
this.common.popToast('error', 'Error', 'Unable to pull commercial. Please try after sometime.');
this.deleteCommercialData('delete_com_record');
clearTimeout(this.timeout);
clearInterval(this.interval);
this.socket.disconnect();
 }​​​​​​​​ else {​​​​​​​​
this.interval=setInterval(() => {​​​​​​​​
this.reCallSocket(userId);
 }​​​​​​​​, 10000);
 }​​​​​​​​
 
 }​​​​​​​​)
 }​​​​​​​​
 
reCallSocket(userId) {​​​​​​​​
this.socket.emit('userconnect', {​​​​​​​​ user_id:userId, action:'score' }​​​​​​​​);
if (!this.globalObj.socketClose) {​​​​​​​​
this.globalObj.socketClose=true;
this.timeout=setTimeout(() => {​​​​​​​​
this.common.popToast('error', 'Error', 'Unable to pull commercial. Please try after sometime.');
this.socket.disconnect();
 }​​​​​​​​, 300000);
 }​​​​​​​​
 }​​​​​​​​
 
referenceSave(res) {​​​​​​​​
letrefId:any;
if (res&&res.id) {​​​​​​​​
refId=res.id;
constdataToSave=this.api.createBusinessRefData(res, SERVICE_TYPES.COMMERCIAL, "business", refId);
this.api.saveServiceReference(dataToSave)
 .subscribe(data=> {​​​​​​​​
this.common.popToast('success', 'Success', 'Commercial pulled successfully.');
this.common.setCommercialData(true);
clearTimeout(this.timeout);
clearInterval(this.interval);
this.deleteCommercialData('delete_temp_url');
 }​​​​​​​​);
 }​​​​​​​​
 }​​​​​​​​
 
   


deleteCommercialData(action:string) {​​​​​​​​
try {​​​​​​​​
this.api.delete(environment.orch+apiUrls.commercialExperian, {​​​​​​​​
user_id:this.common.getStorageData('user_id'),
action
 }​​​​​​​​).subscribe((res:any) => {​​​​​​​​
this.common.hideLoader();
 }​​​​​​​​, err=> {​​​​​​​​
this.common.hideLoader();
 }​​​​​​​​);
 }​​​​​​​​ catch (e) {​​​​​​​​
this.common.hideLoader();
 }​​​​​​​​
 }​​​​​​​​
 
logoutDisconnect() {​​​​​​​​
this.socket.disconnect();
 }​​​​​​​​
​​​​​​

*/

