var wms_layers = [];


        var lyr_BasemapGoogleEarth_0 = new ol.layer.Tile({
            'title': 'Basemap Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FasosdanFasumTiang_Listrik_1 = new ol.format.GeoJSON();
var features_FasosdanFasumTiang_Listrik_1 = format_FasosdanFasumTiang_Listrik_1.readFeatures(json_FasosdanFasumTiang_Listrik_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumTiang_Listrik_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumTiang_Listrik_1.addFeatures(features_FasosdanFasumTiang_Listrik_1);
var lyr_FasosdanFasumTiang_Listrik_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumTiang_Listrik_1, 
                style: style_FasosdanFasumTiang_Listrik_1,
                popuplayertitle: 'Fasos dan Fasum — Tiang_Listrik',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumTiang_Listrik_1.png" /> Fasos dan Fasum — Tiang_Listrik'
            });
var format_FasosdanFasumSosial_dan_Kesejahteraan_2 = new ol.format.GeoJSON();
var features_FasosdanFasumSosial_dan_Kesejahteraan_2 = format_FasosdanFasumSosial_dan_Kesejahteraan_2.readFeatures(json_FasosdanFasumSosial_dan_Kesejahteraan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumSosial_dan_Kesejahteraan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumSosial_dan_Kesejahteraan_2.addFeatures(features_FasosdanFasumSosial_dan_Kesejahteraan_2);
var lyr_FasosdanFasumSosial_dan_Kesejahteraan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumSosial_dan_Kesejahteraan_2, 
                style: style_FasosdanFasumSosial_dan_Kesejahteraan_2,
                popuplayertitle: 'Fasos dan Fasum — Sosial_dan_Kesejahteraan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumSosial_dan_Kesejahteraan_2.png" /> Fasos dan Fasum — Sosial_dan_Kesejahteraan'
            });
var format_FasosdanFasumRekreasi_3 = new ol.format.GeoJSON();
var features_FasosdanFasumRekreasi_3 = format_FasosdanFasumRekreasi_3.readFeatures(json_FasosdanFasumRekreasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumRekreasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumRekreasi_3.addFeatures(features_FasosdanFasumRekreasi_3);
var lyr_FasosdanFasumRekreasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumRekreasi_3, 
                style: style_FasosdanFasumRekreasi_3,
                popuplayertitle: 'Fasos dan Fasum — Rekreasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumRekreasi_3.png" /> Fasos dan Fasum — Rekreasi'
            });
var format_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = format_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.readFeatures(json_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.addFeatures(features_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4);
var lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4, 
                style: style_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Sosial_dan_Kesejahteraan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.png" /> Fasos dan Fasum — Multiple_Buffer_Sosial_dan_Kesejahteraan'
            });
var format_FasosdanFasumMultiple_Buffer_Rekreasi_5 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Rekreasi_5 = format_FasosdanFasumMultiple_Buffer_Rekreasi_5.readFeatures(json_FasosdanFasumMultiple_Buffer_Rekreasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Rekreasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Rekreasi_5.addFeatures(features_FasosdanFasumMultiple_Buffer_Rekreasi_5);
var lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Rekreasi_5, 
                style: style_FasosdanFasumMultiple_Buffer_Rekreasi_5,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Rekreasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Rekreasi_5.png" /> Fasos dan Fasum — Multiple_Buffer_Rekreasi'
            });
var format_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = format_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.readFeatures(json_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.addFeatures(features_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6);
var lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6, 
                style: style_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Layanan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.png" /> Fasos dan Fasum — Multiple_Buffer_Layanan_Transportasi'
            });
var format_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = format_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.readFeatures(json_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.addFeatures(features_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7);
var lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7, 
                style: style_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Fasilitas_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.png" /> Fasos dan Fasum — Multiple_Buffer_Fasilitas_Pendidikan'
            });
var format_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = format_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.readFeatures(json_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.addFeatures(features_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8);
var lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8, 
                style: style_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Fasilitas_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.png" /> Fasos dan Fasum — Multiple_Buffer_Fasilitas_Kesehatan'
            });
var format_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = format_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.readFeatures(json_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.addFeatures(features_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9);
var lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9, 
                style: style_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Fasilitas_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.png" /> Fasos dan Fasum — Multiple_Buffer_Fasilitas_Ibadah'
            });
var format_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = format_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.readFeatures(json_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.addFeatures(features_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10);
var lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10, 
                style: style_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Balai_Pertemuan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.png" /> Fasos dan Fasum — Multiple_Buffer_Balai_Pertemuan'
            });
var format_FasosdanFasumLayanan_Transportasi_11 = new ol.format.GeoJSON();
var features_FasosdanFasumLayanan_Transportasi_11 = format_FasosdanFasumLayanan_Transportasi_11.readFeatures(json_FasosdanFasumLayanan_Transportasi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumLayanan_Transportasi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumLayanan_Transportasi_11.addFeatures(features_FasosdanFasumLayanan_Transportasi_11);
var lyr_FasosdanFasumLayanan_Transportasi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumLayanan_Transportasi_11, 
                style: style_FasosdanFasumLayanan_Transportasi_11,
                popuplayertitle: 'Fasos dan Fasum — Layanan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumLayanan_Transportasi_11.png" /> Fasos dan Fasum — Layanan_Transportasi'
            });
var format_FasosdanFasumLampu_Jalan_12 = new ol.format.GeoJSON();
var features_FasosdanFasumLampu_Jalan_12 = format_FasosdanFasumLampu_Jalan_12.readFeatures(json_FasosdanFasumLampu_Jalan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumLampu_Jalan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumLampu_Jalan_12.addFeatures(features_FasosdanFasumLampu_Jalan_12);
var lyr_FasosdanFasumLampu_Jalan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumLampu_Jalan_12, 
                style: style_FasosdanFasumLampu_Jalan_12,
                popuplayertitle: 'Fasos dan Fasum — Lampu_Jalan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumLampu_Jalan_12.png" /> Fasos dan Fasum — Lampu_Jalan'
            });
var format_FasosdanFasumJalan_13 = new ol.format.GeoJSON();
var features_FasosdanFasumJalan_13 = format_FasosdanFasumJalan_13.readFeatures(json_FasosdanFasumJalan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumJalan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumJalan_13.addFeatures(features_FasosdanFasumJalan_13);
var lyr_FasosdanFasumJalan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumJalan_13, 
                style: style_FasosdanFasumJalan_13,
                popuplayertitle: 'Fasos dan Fasum — Jalan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumJalan_13.png" /> Fasos dan Fasum — Jalan'
            });
var format_FasosdanFasumFasilitas_Pendidikan_14 = new ol.format.GeoJSON();
var features_FasosdanFasumFasilitas_Pendidikan_14 = format_FasosdanFasumFasilitas_Pendidikan_14.readFeatures(json_FasosdanFasumFasilitas_Pendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumFasilitas_Pendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumFasilitas_Pendidikan_14.addFeatures(features_FasosdanFasumFasilitas_Pendidikan_14);
var lyr_FasosdanFasumFasilitas_Pendidikan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumFasilitas_Pendidikan_14, 
                style: style_FasosdanFasumFasilitas_Pendidikan_14,
                popuplayertitle: 'Fasos dan Fasum — Fasilitas_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumFasilitas_Pendidikan_14.png" /> Fasos dan Fasum — Fasilitas_Pendidikan'
            });
var format_FasosdanFasumFasilitas_Kesehatan_15 = new ol.format.GeoJSON();
var features_FasosdanFasumFasilitas_Kesehatan_15 = format_FasosdanFasumFasilitas_Kesehatan_15.readFeatures(json_FasosdanFasumFasilitas_Kesehatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumFasilitas_Kesehatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumFasilitas_Kesehatan_15.addFeatures(features_FasosdanFasumFasilitas_Kesehatan_15);
var lyr_FasosdanFasumFasilitas_Kesehatan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumFasilitas_Kesehatan_15, 
                style: style_FasosdanFasumFasilitas_Kesehatan_15,
                popuplayertitle: 'Fasos dan Fasum — Fasilitas_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumFasilitas_Kesehatan_15.png" /> Fasos dan Fasum — Fasilitas_Kesehatan'
            });
var format_FasosdanFasumFasilitas_Ibadah_16 = new ol.format.GeoJSON();
var features_FasosdanFasumFasilitas_Ibadah_16 = format_FasosdanFasumFasilitas_Ibadah_16.readFeatures(json_FasosdanFasumFasilitas_Ibadah_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumFasilitas_Ibadah_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumFasilitas_Ibadah_16.addFeatures(features_FasosdanFasumFasilitas_Ibadah_16);
var lyr_FasosdanFasumFasilitas_Ibadah_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumFasilitas_Ibadah_16, 
                style: style_FasosdanFasumFasilitas_Ibadah_16,
                popuplayertitle: 'Fasos dan Fasum — Fasilitas_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumFasilitas_Ibadah_16.png" /> Fasos dan Fasum — Fasilitas_Ibadah'
            });
var format_FasosdanFasumBalai_Pertemuan_17 = new ol.format.GeoJSON();
var features_FasosdanFasumBalai_Pertemuan_17 = format_FasosdanFasumBalai_Pertemuan_17.readFeatures(json_FasosdanFasumBalai_Pertemuan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumBalai_Pertemuan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumBalai_Pertemuan_17.addFeatures(features_FasosdanFasumBalai_Pertemuan_17);
var lyr_FasosdanFasumBalai_Pertemuan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumBalai_Pertemuan_17, 
                style: style_FasosdanFasumBalai_Pertemuan_17,
                popuplayertitle: 'Fasos dan Fasum — Balai_Pertemuan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumBalai_Pertemuan_17.png" /> Fasos dan Fasum — Balai_Pertemuan'
            });
var format_JaringanLingkunganJaringan_Lingkungan_18 = new ol.format.GeoJSON();
var features_JaringanLingkunganJaringan_Lingkungan_18 = format_JaringanLingkunganJaringan_Lingkungan_18.readFeatures(json_JaringanLingkunganJaringan_Lingkungan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanLingkunganJaringan_Lingkungan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanLingkunganJaringan_Lingkungan_18.addFeatures(features_JaringanLingkunganJaringan_Lingkungan_18);
var lyr_JaringanLingkunganJaringan_Lingkungan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanLingkunganJaringan_Lingkungan_18, 
                style: style_JaringanLingkunganJaringan_Lingkungan_18,
                popuplayertitle: 'Jaringan Lingkungan — Jaringan_Lingkungan',
                interactive: true,
                title: '<img src="styles/legend/JaringanLingkunganJaringan_Lingkungan_18.png" /> Jaringan Lingkungan — Jaringan_Lingkungan'
            });
var format_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19 = format_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.readFeatures(json_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.addFeatures(features_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19);
var lyr_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19, 
                style: style_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19,
                popuplayertitle: 'Batas Administrasi RTRW — RW03_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.png" /> Batas Administrasi RTRW — RW03_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20 = format_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.readFeatures(json_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.addFeatures(features_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20);
var lyr_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20, 
                style: style_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20,
                popuplayertitle: 'Batas Administrasi RTRW — RW02_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.png" /> Batas Administrasi RTRW — RW02_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21 = format_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.readFeatures(json_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.addFeatures(features_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21);
var lyr_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21, 
                style: style_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21,
                popuplayertitle: 'Batas Administrasi RTRW — RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.png" /> Batas Administrasi RTRW — RW01_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22 = format_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.readFeatures(json_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.addFeatures(features_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22);
var lyr_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22, 
                style: style_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22,
                popuplayertitle: 'Batas Administrasi RTRW — RT06RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.png" /> Batas Administrasi RTRW — RT06RW01_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23 = format_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.readFeatures(json_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.addFeatures(features_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23);
var lyr_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23, 
                style: style_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23,
                popuplayertitle: 'Batas Administrasi RTRW — RT05RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.png" /> Batas Administrasi RTRW — RT05RW01_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24 = format_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.readFeatures(json_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.addFeatures(features_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24);
var lyr_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24, 
                style: style_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24,
                popuplayertitle: 'Batas Administrasi RTRW — RT04RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.png" /> Batas Administrasi RTRW — RT04RW01_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25 = format_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.readFeatures(json_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.addFeatures(features_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25);
var lyr_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25, 
                style: style_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25,
                popuplayertitle: 'Batas Administrasi RTRW — RT03RW03_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.png" /> Batas Administrasi RTRW — RT03RW03_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26 = format_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.readFeatures(json_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.addFeatures(features_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26);
var lyr_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26, 
                style: style_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26,
                popuplayertitle: 'Batas Administrasi RTRW — RT03RW02_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.png" /> Batas Administrasi RTRW — RT03RW02_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27 = format_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.readFeatures(json_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.addFeatures(features_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27);
var lyr_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27, 
                style: style_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27,
                popuplayertitle: 'Batas Administrasi RTRW — RT03RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.png" /> Batas Administrasi RTRW — RT03RW01_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28 = format_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.readFeatures(json_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.addFeatures(features_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28);
var lyr_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28, 
                style: style_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28,
                popuplayertitle: 'Batas Administrasi RTRW — RT02RW03_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.png" /> Batas Administrasi RTRW — RT02RW03_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29 = format_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.readFeatures(json_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.addFeatures(features_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29);
var lyr_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29, 
                style: style_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29,
                popuplayertitle: 'Batas Administrasi RTRW — RT02RW02_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.png" /> Batas Administrasi RTRW — RT02RW02_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30 = format_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.readFeatures(json_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.addFeatures(features_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30);
var lyr_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30, 
                style: style_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30,
                popuplayertitle: 'Batas Administrasi RTRW — RT02RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.png" /> Batas Administrasi RTRW — RT02RW01_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31 = format_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.readFeatures(json_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.addFeatures(features_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31);
var lyr_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31, 
                style: style_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31,
                popuplayertitle: 'Batas Administrasi RTRW — RT01RW03_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.png" /> Batas Administrasi RTRW — RT01RW03_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32 = format_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.readFeatures(json_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.addFeatures(features_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32);
var lyr_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32, 
                style: style_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32,
                popuplayertitle: 'Batas Administrasi RTRW — RT01RW02_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.png" /> Batas Administrasi RTRW — RT01RW02_Kelurahan_Tanjung_Riau'
            });
var format_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33 = new ol.format.GeoJSON();
var features_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33 = format_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.readFeatures(json_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.addFeatures(features_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33);
var lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33, 
                style: style_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33,
                popuplayertitle: 'Batas Administrasi RTRW — RT01RW01_Kelurahan_Tanjung_Riau',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.png" /> Batas Administrasi RTRW — RT01RW01_Kelurahan_Tanjung_Riau'
            });

lyr_BasemapGoogleEarth_0.setVisible(true);lyr_FasosdanFasumTiang_Listrik_1.setVisible(true);lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.setVisible(true);lyr_FasosdanFasumRekreasi_3.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.setVisible(true);lyr_FasosdanFasumLayanan_Transportasi_11.setVisible(true);lyr_FasosdanFasumLampu_Jalan_12.setVisible(true);lyr_FasosdanFasumJalan_13.setVisible(true);lyr_FasosdanFasumFasilitas_Pendidikan_14.setVisible(true);lyr_FasosdanFasumFasilitas_Kesehatan_15.setVisible(true);lyr_FasosdanFasumFasilitas_Ibadah_16.setVisible(true);lyr_FasosdanFasumBalai_Pertemuan_17.setVisible(true);lyr_JaringanLingkunganJaringan_Lingkungan_18.setVisible(true);lyr_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.setVisible(true);lyr_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.setVisible(true);lyr_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.setVisible(true);lyr_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.setVisible(true);lyr_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.setVisible(true);lyr_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.setVisible(true);lyr_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.setVisible(true);lyr_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.setVisible(true);lyr_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.setVisible(true);lyr_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.setVisible(true);lyr_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.setVisible(true);lyr_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.setVisible(true);lyr_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.setVisible(true);lyr_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.setVisible(true);lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.setVisible(true);
var layersList = [lyr_BasemapGoogleEarth_0,lyr_FasosdanFasumTiang_Listrik_1,lyr_FasosdanFasumSosial_dan_Kesejahteraan_2,lyr_FasosdanFasumRekreasi_3,lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4,lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5,lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6,lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7,lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8,lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9,lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10,lyr_FasosdanFasumLayanan_Transportasi_11,lyr_FasosdanFasumLampu_Jalan_12,lyr_FasosdanFasumJalan_13,lyr_FasosdanFasumFasilitas_Pendidikan_14,lyr_FasosdanFasumFasilitas_Kesehatan_15,lyr_FasosdanFasumFasilitas_Ibadah_16,lyr_FasosdanFasumBalai_Pertemuan_17,lyr_JaringanLingkunganJaringan_Lingkungan_18,lyr_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19,lyr_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20,lyr_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21,lyr_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22,lyr_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23,lyr_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24,lyr_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25,lyr_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26,lyr_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27,lyr_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28,lyr_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29,lyr_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30,lyr_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31,lyr_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32,lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33];
lyr_FasosdanFasumTiang_Listrik_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasum': 'Nama_Fasum', 'X': 'X', 'Y': 'Y', });
lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumRekreasi_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumLayanan_Transportasi_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumLampu_Jalan_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_fasum': 'Nama_fasum', 'X': 'X', 'Y': 'Y', });
lyr_FasosdanFasumJalan_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'traffic_si': 'traffic_si', 'traffic__1': 'traffic__1', 'crossing_i': 'crossing_i', 'button_ope': 'button_ope', 'barrier': 'barrier', 'proposed': 'proposed', 'informal': 'informal', 'ramp': 'ramp', 'level': 'level', 'oneway_con': 'oneway_con', 'sidewalk_r': 'sidewalk_r', 'sidewalk_l': 'sidewalk_l', 'ford': 'ford', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'lit': 'lit', 'email': 'email', 'bike_ride': 'bike_ride', 'name_id': 'name_id', 'operator_t': 'operator_t', 'operator': 'operator', 'capacity': 'capacity', 'descriptio': 'descriptio', 'aeroway': 'aeroway', 'embankment': 'embankment', 'flood_pron': 'flood_pron', 'width': 'width', 'maxspeed_a': 'maxspeed_a', 'maxheight': 'maxheight', 'constructi': 'constructi', 'footway': 'footway', 'public_tra': 'public_tra', 'oneway_mot': 'oneway_mot', 'man_made': 'man_made', 'incline': 'incline', 'cycleway': 'cycleway', 'postal_cod': 'postal_cod', 'key': 'key', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'maxweight_': 'maxweight_', 'garmin_typ': 'garmin_typ', 'motor_vehi': 'motor_vehi', 'roundabout': 'roundabout', 'wikidata': 'wikidata', 'tunnel': 'tunnel', 'name_en': 'name_en', 'import': 'import', 'tracktype': 'tracktype', 'name_ja': 'name_ja', 'parking_la': 'parking_la', 'bridge_str': 'bridge_str', 'covered': 'covered', 'check_date': 'check_date', 'junction': 'junction', 'service': 'service', 'sidewalk': 'sidewalk', 'bridge_nam': 'bridge_nam', 'horse': 'horse', 'alt_name': 'alt_name', 'lane_marki': 'lane_marki', 'moped': 'moped', 'mofa': 'mofa', 'ref': 'ref', 'lanes': 'lanes', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'surface': 'surface', 'maxspeed': 'maxspeed', 'motorcycle': 'motorcycle', 'motor_ve_1': 'motor_ve_1', 'destinatio': 'destinatio', 'taxi': 'taxi', 'psv': 'psv', 'motorcar': 'motorcar', 'hgv': 'hgv', 'goods': 'goods', 'foot': 'foot', 'emergency': 'emergency', 'bicycle': 'bicycle', 'catmp_Road': 'catmp_Road', 'sport': 'sport', 'access': 'access', 'oneway': 'oneway', 'name': 'name', 'Shape_Length': 'Shape_Length', });
lyr_FasosdanFasumFasilitas_Pendidikan_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Sekol': 'Nama_Sekol', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumFasilitas_Kesehatan_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumFasilitas_Ibadah_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumBalai_Pertemuan_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_JaringanLingkunganJaringan_Lingkungan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', 'Id': 'Id', 'Shape_Length': 'Shape_Length', });
lyr_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Wilayah': 'Wilayah', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumTiang_Listrik_1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasum': '', 'X': '', 'Y': '', });
lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumRekreasi_3.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumLayanan_Transportasi_11.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumLampu_Jalan_12.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_fasum': '', 'X': '', 'Y': '', });
lyr_FasosdanFasumJalan_13.set('fieldImages', {'OBJECTID': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'traffic_si': '', 'traffic__1': '', 'crossing_i': '', 'button_ope': '', 'barrier': '', 'proposed': '', 'informal': '', 'ramp': '', 'level': '', 'oneway_con': '', 'sidewalk_r': '', 'sidewalk_l': '', 'ford': '', 'crossing_m': '', 'crossing': '', 'lit': '', 'email': '', 'bike_ride': '', 'name_id': '', 'operator_t': '', 'operator': '', 'capacity': '', 'descriptio': '', 'aeroway': '', 'embankment': '', 'flood_pron': '', 'width': '', 'maxspeed_a': '', 'maxheight': '', 'constructi': '', 'footway': '', 'public_tra': '', 'oneway_mot': '', 'man_made': '', 'incline': '', 'cycleway': '', 'postal_cod': '', 'key': '', 'addr_count': '', 'addr_city': '', 'maxweight_': '', 'garmin_typ': '', 'motor_vehi': '', 'roundabout': '', 'wikidata': '', 'tunnel': '', 'name_en': '', 'import': '', 'tracktype': '', 'name_ja': '', 'parking_la': '', 'bridge_str': '', 'covered': '', 'check_date': '', 'junction': '', 'service': '', 'sidewalk': '', 'bridge_nam': '', 'horse': '', 'alt_name': '', 'lane_marki': '', 'moped': '', 'mofa': '', 'ref': '', 'lanes': '', 'layer': '', 'bridge': '', 'smoothness': '', 'surface': '', 'maxspeed': '', 'motorcycle': '', 'motor_ve_1': '', 'destinatio': '', 'taxi': '', 'psv': '', 'motorcar': '', 'hgv': '', 'goods': '', 'foot': '', 'emergency': '', 'bicycle': '', 'catmp_Road': '', 'sport': '', 'access': '', 'oneway': '', 'name': '', 'Shape_Length': '', });
lyr_FasosdanFasumFasilitas_Pendidikan_14.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Sekol': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumFasilitas_Kesehatan_15.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumFasilitas_Ibadah_16.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumBalai_Pertemuan_17.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_JaringanLingkunganJaringan_Lingkungan_18.set('fieldImages', {'OBJECTID': '', 'arcid': '', 'grid_code': '', 'from_node': '', 'to_node': '', 'Id': '', 'Shape_Length': '', });
lyr_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Wilayah': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumTiang_Listrik_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasum': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumRekreasi_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumLayanan_Transportasi_11.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumLampu_Jalan_12.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_fasum': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_FasosdanFasumJalan_13.set('fieldLabels', {'OBJECTID': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'traffic_si': 'no label', 'traffic__1': 'no label', 'crossing_i': 'no label', 'button_ope': 'no label', 'barrier': 'no label', 'proposed': 'no label', 'informal': 'no label', 'ramp': 'no label', 'level': 'no label', 'oneway_con': 'no label', 'sidewalk_r': 'no label', 'sidewalk_l': 'no label', 'ford': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'lit': 'no label', 'email': 'no label', 'bike_ride': 'no label', 'name_id': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'capacity': 'no label', 'descriptio': 'no label', 'aeroway': 'no label', 'embankment': 'no label', 'flood_pron': 'no label', 'width': 'no label', 'maxspeed_a': 'no label', 'maxheight': 'no label', 'constructi': 'no label', 'footway': 'no label', 'public_tra': 'no label', 'oneway_mot': 'no label', 'man_made': 'no label', 'incline': 'no label', 'cycleway': 'no label', 'postal_cod': 'no label', 'key': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'maxweight_': 'no label', 'garmin_typ': 'no label', 'motor_vehi': 'no label', 'roundabout': 'no label', 'wikidata': 'no label', 'tunnel': 'no label', 'name_en': 'no label', 'import': 'no label', 'tracktype': 'no label', 'name_ja': 'no label', 'parking_la': 'no label', 'bridge_str': 'no label', 'covered': 'no label', 'check_date': 'no label', 'junction': 'no label', 'service': 'no label', 'sidewalk': 'no label', 'bridge_nam': 'no label', 'horse': 'no label', 'alt_name': 'no label', 'lane_marki': 'no label', 'moped': 'no label', 'mofa': 'no label', 'ref': 'no label', 'lanes': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'motorcycle': 'no label', 'motor_ve_1': 'no label', 'destinatio': 'no label', 'taxi': 'no label', 'psv': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'goods': 'no label', 'foot': 'no label', 'emergency': 'no label', 'bicycle': 'no label', 'catmp_Road': 'no label', 'sport': 'no label', 'access': 'no label', 'oneway': 'no label', 'name': 'no label', 'Shape_Length': 'no label', });
lyr_FasosdanFasumFasilitas_Pendidikan_14.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Sekol': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumFasilitas_Kesehatan_15.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumFasilitas_Ibadah_16.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumBalai_Pertemuan_17.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_JaringanLingkunganJaringan_Lingkungan_18.set('fieldLabels', {'OBJECTID': 'no label', 'arcid': 'no label', 'grid_code': 'no label', 'from_node': 'no label', 'to_node': 'no label', 'Id': 'no label', 'Shape_Length': 'no label', });
lyr_BatasAdministrasiRTRWRW03_Kelurahan_Tanjung_Riau_19.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRW02_Kelurahan_Tanjung_Riau_20.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRW01_Kelurahan_Tanjung_Riau_21.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT06RW01_Kelurahan_Tanjung_Riau_22.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT05RW01_Kelurahan_Tanjung_Riau_23.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT04RW01_Kelurahan_Tanjung_Riau_24.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT03RW03_Kelurahan_Tanjung_Riau_25.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT03RW02_Kelurahan_Tanjung_Riau_26.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT03RW01_Kelurahan_Tanjung_Riau_27.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT02RW03_Kelurahan_Tanjung_Riau_28.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT02RW02_Kelurahan_Tanjung_Riau_29.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT02RW01_Kelurahan_Tanjung_Riau_30.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT01RW03_Kelurahan_Tanjung_Riau_31.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT01RW02_Kelurahan_Tanjung_Riau_32.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Wilayah': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdministrasiRTRWRT01RW01_Kelurahan_Tanjung_Riau_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});