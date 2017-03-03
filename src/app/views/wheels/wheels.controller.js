export default class WheelsController {
    static resolve = {

        resolvedWheels($stateParams,wheelsService) {
            return wheelsService.getAllWheels($stateParams.make,$stateParams.model,$stateParams.year)
        },
        resolvedModelInfo($stateParams,wheelsService) {
            return wheelsService.getAllGenerations($stateParams.make,$stateParams.model,$stateParams.year)
        }
    }

    constructor(resolvedWheels,resolvedModelInfo) {
        'ngInject'
        this.wheels = resolvedWheels
        this.info = resolvedModelInfo
        var grouped = {}
        this.wheels.forEach((elem,ind,arr)=>{
            if (!(elem.market.abbr in grouped)) grouped[elem.market.abbr] = [];
            grouped[elem.market.abbr].push(elem)
        })
        this.groupedWheels = grouped
    }

    getBodies() {
        var bodieList = []
        this.wheels.some((el,ind)=>{
            if (el.generation) {
                if (el.generation.bodies) {
                    bodieList = el.generation.bodies;
                    this.hasBodies = true;
                    return true
                }
            } else {
                this.hasBodies = false;
            }
        });
        return bodieList
    }

}