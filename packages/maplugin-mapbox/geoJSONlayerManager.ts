import { GeoJSONLayerManager as GeoJSONLayerManagerBase, TFeatureEvent, TIdentityGeoJSONFeature } from '@maplugin-vue/core';

export class GeoJSONLayerManager<TFeature extends TIdentityGeoJSONFeature = TIdentityGeoJSONFeature>
    extends GeoJSONLayerManagerBase<TFeature> {

    /**
     *
     */
    constructor(map: mapboxgl.Map, data: Array<TFeature>) {
        super({
            map,
            data
        });
    }
    protected onChange(mode: TFeatureEvent, features?: TIdentityGeoJSONFeature[] | undefined): void {
        if(mode !== "destory" && mode !== "all"){
            this.reRender();
        }
    }
}