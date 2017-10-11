function setColClass(e){var t,a=e.find(".col-sm-4").length,i=e.find(".col-sm-4").last().index();if(3!==a){if(a>3)for(;a>3;)a-=3;for(t=12/a;a;)--a,e.find($("[class*='col-sm-']")).eq(i-a).removeClass("col-sm-4").addClass("col-sm-"+t)}}function getInputLabelText(e){var t="",a=[];return e.split(/(?=[A-Z])/).filter(function(e){1===e.length?t+=e:(t+=" ",t+=e)}),t=t.trim(),t=t[0].toUpperCase()+t.substr(1),t.split(" ").filter(function(e,i){1===e.length&&i!==t.split(" ").length-1?a.push(e+"-"):a.push(e)}),a.join(" ").replace(/-\s/,"-")}function updateTextForIndicatorTypeSelect(e){e.val()&&(e.val().length>1?e.find("option:selected").each(function(){$(this).text($(this).attr("data-abbr"))}):e.find("option:selected").each(function(){$(this).text($(this).attr("data-full-text"))}),e.selectpicker("refresh").closest(".bootstrap-select").find(".dropdown-menu.inner").find("span.text").each(function(t){$(this).text(e.find("option").eq(t).attr("data-full-text"))}))}!function(){function e(e,t){var a=n.find("option:selected").text().trim(),i=o.val();m=anychart.data.table();var r,l=m.mapAs({value:1,volume:1,open:1,high:2,low:3,close:4});u=anychart.stock();var s=u.plot(0);if(m.addData(h.data[a.toLowerCase()]),t){var d,c,p=[];r=s[h.chartType](l),r.name(a.toUpperCase()),s.yScale(h.scale);for(var f in h.indicators)d=f,h.indicators.hasOwnProperty(f)&&(p=h.indicators[f].settings,p[0]=l),~d.toLowerCase().indexOf("stochastic")&&(d="stochastic"),h.indicators.hasOwnProperty(f)&&(c=u.plot(h.indicators[f].plotIndex),c[d].apply(c,p),c.yAxis(1).orientation("right"))}else r=s[i](l),r.name(a.toUpperCase());r.stroke("2px #64b5f6"),s.yAxis(1).orientation("right"),u.padding(10,50,20,50),u.scroller().line(l),u.selectRange("2004-11-14","2007-11-15"),u.container(e),u.draw(),anychart.ui.rangePicker().render(u),anychart.ui.rangeSelector().render(u),u.listen("chartDraw",function(){setTimeout(function(){v.hide()},100)})}function t(){u&&(u.dispose(),u=null)}function a(){var e,t,a=x.defaultSettings[x.name],i=0;$("#indicatorSettingsModalTitle").text(x.defaultSettings[x.name].overview.title),f.empty(),f.append('<div class="row"></div>');var n=f.find(".row");for(var o in a)if(a.hasOwnProperty(o)&&"overview"!==o&&"plotIndex"!==o)if("string"==typeof a[o]){for(n.append(y),e=$("#indicatorFormGroup"),e.find("select").attr("id",o),e.find("label").attr("for",o).text(getInputLabelText(o)),i=0;i<x.seriesType.length;i++)t=$("<option></option>"),t.val(x.seriesType[i].toLowerCase()),t.text(getInputLabelText(x.seriesType[i])),e.find("select").append(t);e.removeAttr("id")}else if("number"==typeof a[o])n.append(g),e=$("#indicatorFormGroup"),e.find("input").attr("id",o),e.removeAttr("id").find("label").attr("for",o).text(getInputLabelText(o));else if("object"==typeof a[o]){for(n.append(y),e=$("#indicatorFormGroup"),e.find("select").attr("id",o),e.find("label").attr("for",o).text(getInputLabelText(o)),i=0;i<a[o].length;i++)t=$("<option></option>"),t.val(a[o][i].toLowerCase()),t.text(a[o][i]),e.find("select").append(t);e.removeAttr("id")}setColClass(f),f.find($("[class*='col-sm-']")).last().after('<div class="col-xs-12" id="overviewText"></div>'),f.find("#overviewText").append(x.defaultSettings[x.name].overview.description)}function i(){var e=x.defaultSettings[x.name];for(var t in e)e.hasOwnProperty(t)&&"overview"!==t&&"plotIndex"!==t&&$("#"+t).val(e[t])}var n=$("#chartDataSelect"),o=$("#seriesTypeSelect"),r=$("#scaleTypeSelect"),l=$("#indicatorTypeSelect"),s=$("#indicatorSettingsModal"),d=$("#resetButton"),c=$("#addIndicatorButton"),p=$("#indicatorNavPanel"),f=$("#indicatorForm"),v=$("#loader"),h={};h.data={},h.chartType=o.val(),h.scale=r.val(),h.indicators={};var u,m,x={name:"",plotIndex:0,defaultSettings:{},seriesType:["area","column","jump-line","line","marker","spline","spline-area","step-area","step-line","stick"]},g='<div class="col-sm-4"><div class="form-group" id="indicatorFormGroup"><label for="" class="control-label"></label><input type="number" class="form-control" id=""></div></div>',y='<div class="col-sm-4"><div class="form-group" id="indicatorFormGroup"><label for="" class="control-label"></label><select class="form-control select show-tick" id=""></select></div></div>',b={createChart:e,removeChart:t};"file:"===window.location.protocol&&(v.hide(),$(".wrapper").hide(),$("#warning").modal({backdrop:"static",keyboard:!1})),$.get("indicators.xml",function(e){$(e).find("indicator").each(function(e,t){var a,i=$(this).attr("type"),n=$("<option></option>");n.attr({value:i,"data-abbr":$(this).find("abbreviation").text(),"data-full-text":$(this).find("title").text()}).text($(this).find("title").text()),$(this).find('[name="plotIndex"]').length&&n.attr("data-plot-index",$(this).find('[name="plotIndex"]').attr("value")),l.append(n),x.defaultSettings[i]={},$(t).find("defaults").children().each(function(){var e=$(this).attr("name"),t=$(this).attr("value");switch($(this).attr("type")){case"number":t=+t;break;case"array":t=JSON.parse(t)}x.defaultSettings[i][e]=t}),a=$(t).find("description").text(),x.defaultSettings[i].overview={},x.defaultSettings[i].overview.title=$(t).find("title").text(),x.defaultSettings[i].overview.description=a});var t=l.find("option").sort(function(e,t){return e.value.toUpperCase().localeCompare(t.value.toUpperCase())});l.append(t),l.selectpicker()}),anychart.onDocumentReady(function(){anychart.data.loadJsonFile(n.find("option:selected").data().json,function(e){h.data[n.find("option:selected").text().toLowerCase().trim()]=e,b.createChart("chart-container")}),n.on("change",function(){var e=$(this).find("option:selected").text().toLowerCase().trim();~Object.keys(h.data).indexOf(e)?(m.addData(h.data[e]),u.plot().getSeries(0).name(e.toUpperCase())):anychart.data.loadJsonFile($(this).find("option:selected").data().json,function(t){h.data[e]=t,m.addData(t),u.plot().getSeries(0).name(e.toUpperCase())})}),o.on("change",function(){var e=$(this).val();u.plot().getSeries(0).seriesType(e),h.chartType=e}),l.on("change",function(){if($(this).val()&&1===$(this).val().length&&updateTextForIndicatorTypeSelect(l),null===$(this).val()||$(this).val().length<Object.keys(h.indicators).length){if(b.removeChart(),null!==$(this).val())for(var e in h.indicators)~$(this).val().indexOf(e)||delete h.indicators[e];else h.indicators={};return void b.createChart("chart-container",!0)}for(var t=0;t<$(this).val().length;t++)if(!~Object.keys(h.indicators).indexOf($(this).val()[t])){x.name=$(this).val()[t];break}x.plotIndex=$(this).find('option[value="'+x.name+'"]').data().plotIndex,0!==x.plotIndex&&(x.plotIndex=u.getPlotsCount()),a(),i(),s.modal("show"),p.find(".select.open").removeClass("open")}),r.on("change",function(){b.removeChart(),h.scale=$(this).val(),b.createChart("chart-container",!0)}),s.on("hidden.bs.modal",function(){for(var e,t=0;t<l.val().length;t++)if(!~Object.keys(h.indicators).indexOf(l.val()[t])){e=l.val()[t];break}if(!e)return updateTextForIndicatorTypeSelect(l),!1;var a=l.find('[value="'+e+'"]').index();l.find('[value="'+e+'"]').removeAttr("selected"),l.prev(".dropdown-menu").find('li[data-original-index="'+a+'"]').removeClass("selected"),updateTextForIndicatorTypeSelect(l)}),s.on("show.bs.modal",function(){f.find(".select").selectpicker()}),d.on("click",function(e){e.preventDefault(),b.removeChart(),h.indicators={},h.scale="linear",h.chartType="line",n.val(1).selectpicker("refresh"),o.val("candlestick").selectpicker("refresh"),l.val("").selectpicker("refresh"),r.val("linear").selectpicker("refresh"),b.createChart("chart-container")}),c.on("click",function(){var e=m.mapAs({value:1,volume:1,open:1,high:2,low:3,close:4}),t=x.defaultSettings[x.name],a=[e],i=x.name;~i.toLowerCase().indexOf("stochastic")&&(i="stochastic");for(key in t)if("overview"!==key&&"plotIndex"!==key){var n=$("#"+key).val();n="true"==n||"false"==n?"true"==n:n,a.push(n)}h.indicators[x.name]={},h.indicators[x.name].settings=a,h.indicators[x.name].plotIndex=x.plotIndex;var o=u.plot(x.plotIndex);o[i].apply(o,a),o.yAxis(1).orientation("right"),s.modal("hide")})})}();