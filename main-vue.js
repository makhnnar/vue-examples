
window.onload = function () {
	new Vue({
            el: "#app",
            data: {
                toSend: 0,
                comision: 0,
                toRecieve: 0,
                porcentaje: 0.06
            },
            computed: {
                calculateComision:function () {
                    return this.comision = this.toSend*this.porcentaje;
                },
                calculateRecieving:function () {
                    return this.toRecieve = this.toSend-this.comision;
                } 
            }
        });

}