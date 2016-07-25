/*
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Tooltip(options) {
    this.options = options || {};
    this.options.class = 'tooltip' + (options.class ? ' ' + options.class : '');
    this.options.id = options.id || 'tt1'; 
    this.options.height =  options.height || 28;

    d3.select("body").selectAll('#'+this.options.id).remove();
    this.ttdiv = d3.select("body").append("div")
        .attr("class", this.options.class)
        .attr("id", this.options.id)
        .style("opacity", 0);
}

Tooltip.prototype.show = function(html,event) {
    event = event || d3.event;
    this.ttdiv.transition()
        .duration(200)
        .style("opacity", .9);
    this.ttdiv.html(html || '')
        .style("left", event.pageX + "px")
        .style("top", event.pageY - this.options.height + "px");
}

Tooltip.prototype.hide = function() {
    this.ttdiv.transition().duration(500).style("opacity", 0);
}
