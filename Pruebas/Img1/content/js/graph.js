/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 6645.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 13.0], [3.1, 13.0], [3.2, 13.0], [3.3, 13.0], [3.4, 13.0], [3.5, 13.0], [3.6, 13.0], [3.7, 13.0], [3.8, 13.0], [3.9, 13.0], [4.0, 17.0], [4.1, 17.0], [4.2, 17.0], [4.3, 17.0], [4.4, 17.0], [4.5, 17.0], [4.6, 17.0], [4.7, 17.0], [4.8, 17.0], [4.9, 17.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 35.0], [5.8, 35.0], [5.9, 35.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 39.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 45.0], [8.1, 45.0], [8.2, 45.0], [8.3, 45.0], [8.4, 45.0], [8.5, 45.0], [8.6, 45.0], [8.7, 45.0], [8.8, 45.0], [8.9, 45.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 49.0], [10.1, 49.0], [10.2, 49.0], [10.3, 49.0], [10.4, 49.0], [10.5, 49.0], [10.6, 49.0], [10.7, 49.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 59.0], [12.1, 59.0], [12.2, 59.0], [12.3, 59.0], [12.4, 59.0], [12.5, 59.0], [12.6, 59.0], [12.7, 59.0], [12.8, 59.0], [12.9, 59.0], [13.0, 59.0], [13.1, 59.0], [13.2, 59.0], [13.3, 59.0], [13.4, 59.0], [13.5, 59.0], [13.6, 59.0], [13.7, 59.0], [13.8, 59.0], [13.9, 59.0], [14.0, 60.0], [14.1, 60.0], [14.2, 60.0], [14.3, 60.0], [14.4, 60.0], [14.5, 60.0], [14.6, 60.0], [14.7, 60.0], [14.8, 60.0], [14.9, 60.0], [15.0, 61.0], [15.1, 61.0], [15.2, 61.0], [15.3, 61.0], [15.4, 61.0], [15.5, 61.0], [15.6, 61.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 68.0], [16.1, 68.0], [16.2, 68.0], [16.3, 68.0], [16.4, 68.0], [16.5, 68.0], [16.6, 68.0], [16.7, 68.0], [16.8, 68.0], [16.9, 68.0], [17.0, 68.0], [17.1, 68.0], [17.2, 68.0], [17.3, 68.0], [17.4, 68.0], [17.5, 68.0], [17.6, 68.0], [17.7, 68.0], [17.8, 68.0], [17.9, 68.0], [18.0, 69.0], [18.1, 69.0], [18.2, 69.0], [18.3, 69.0], [18.4, 69.0], [18.5, 69.0], [18.6, 69.0], [18.7, 69.0], [18.8, 69.0], [18.9, 69.0], [19.0, 70.0], [19.1, 70.0], [19.2, 70.0], [19.3, 70.0], [19.4, 70.0], [19.5, 70.0], [19.6, 70.0], [19.7, 70.0], [19.8, 70.0], [19.9, 70.0], [20.0, 73.0], [20.1, 73.0], [20.2, 73.0], [20.3, 73.0], [20.4, 73.0], [20.5, 73.0], [20.6, 73.0], [20.7, 73.0], [20.8, 73.0], [20.9, 73.0], [21.0, 74.0], [21.1, 74.0], [21.2, 74.0], [21.3, 74.0], [21.4, 74.0], [21.5, 74.0], [21.6, 74.0], [21.7, 74.0], [21.8, 74.0], [21.9, 74.0], [22.0, 74.0], [22.1, 74.0], [22.2, 74.0], [22.3, 74.0], [22.4, 74.0], [22.5, 74.0], [22.6, 74.0], [22.7, 74.0], [22.8, 74.0], [22.9, 74.0], [23.0, 75.0], [23.1, 75.0], [23.2, 75.0], [23.3, 75.0], [23.4, 75.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 75.0], [23.9, 75.0], [24.0, 78.0], [24.1, 78.0], [24.2, 78.0], [24.3, 78.0], [24.4, 78.0], [24.5, 78.0], [24.6, 78.0], [24.7, 78.0], [24.8, 78.0], [24.9, 78.0], [25.0, 79.0], [25.1, 79.0], [25.2, 79.0], [25.3, 79.0], [25.4, 79.0], [25.5, 79.0], [25.6, 79.0], [25.7, 79.0], [25.8, 79.0], [25.9, 79.0], [26.0, 89.0], [26.1, 89.0], [26.2, 89.0], [26.3, 89.0], [26.4, 89.0], [26.5, 89.0], [26.6, 89.0], [26.7, 89.0], [26.8, 89.0], [26.9, 89.0], [27.0, 112.0], [27.1, 112.0], [27.2, 112.0], [27.3, 112.0], [27.4, 112.0], [27.5, 112.0], [27.6, 112.0], [27.7, 112.0], [27.8, 112.0], [27.9, 112.0], [28.0, 149.0], [28.1, 149.0], [28.2, 149.0], [28.3, 149.0], [28.4, 149.0], [28.5, 149.0], [28.6, 149.0], [28.7, 149.0], [28.8, 149.0], [28.9, 149.0], [29.0, 169.0], [29.1, 169.0], [29.2, 169.0], [29.3, 169.0], [29.4, 169.0], [29.5, 169.0], [29.6, 169.0], [29.7, 169.0], [29.8, 169.0], [29.9, 169.0], [30.0, 177.0], [30.1, 177.0], [30.2, 177.0], [30.3, 177.0], [30.4, 177.0], [30.5, 177.0], [30.6, 177.0], [30.7, 177.0], [30.8, 177.0], [30.9, 177.0], [31.0, 187.0], [31.1, 187.0], [31.2, 187.0], [31.3, 187.0], [31.4, 187.0], [31.5, 187.0], [31.6, 187.0], [31.7, 187.0], [31.8, 187.0], [31.9, 187.0], [32.0, 191.0], [32.1, 191.0], [32.2, 191.0], [32.3, 191.0], [32.4, 191.0], [32.5, 191.0], [32.6, 191.0], [32.7, 191.0], [32.8, 191.0], [32.9, 191.0], [33.0, 3771.0], [33.1, 3771.0], [33.2, 3771.0], [33.3, 3771.0], [33.4, 3771.0], [33.5, 3771.0], [33.6, 3771.0], [33.7, 3771.0], [33.8, 3771.0], [33.9, 3771.0], [34.0, 3811.0], [34.1, 3811.0], [34.2, 3811.0], [34.3, 3811.0], [34.4, 3811.0], [34.5, 3811.0], [34.6, 3811.0], [34.7, 3811.0], [34.8, 3811.0], [34.9, 3811.0], [35.0, 3836.0], [35.1, 3836.0], [35.2, 3836.0], [35.3, 3836.0], [35.4, 3836.0], [35.5, 3836.0], [35.6, 3836.0], [35.7, 3836.0], [35.8, 3836.0], [35.9, 3836.0], [36.0, 3849.0], [36.1, 3849.0], [36.2, 3849.0], [36.3, 3849.0], [36.4, 3849.0], [36.5, 3849.0], [36.6, 3849.0], [36.7, 3849.0], [36.8, 3849.0], [36.9, 3849.0], [37.0, 3850.0], [37.1, 3850.0], [37.2, 3850.0], [37.3, 3850.0], [37.4, 3850.0], [37.5, 3850.0], [37.6, 3850.0], [37.7, 3850.0], [37.8, 3850.0], [37.9, 3850.0], [38.0, 3860.0], [38.1, 3860.0], [38.2, 3860.0], [38.3, 3860.0], [38.4, 3860.0], [38.5, 3860.0], [38.6, 3860.0], [38.7, 3860.0], [38.8, 3860.0], [38.9, 3860.0], [39.0, 3876.0], [39.1, 3876.0], [39.2, 3876.0], [39.3, 3876.0], [39.4, 3876.0], [39.5, 3876.0], [39.6, 3876.0], [39.7, 3876.0], [39.8, 3876.0], [39.9, 3876.0], [40.0, 3890.0], [40.1, 3890.0], [40.2, 3890.0], [40.3, 3890.0], [40.4, 3890.0], [40.5, 3890.0], [40.6, 3890.0], [40.7, 3890.0], [40.8, 3890.0], [40.9, 3890.0], [41.0, 3893.0], [41.1, 3893.0], [41.2, 3893.0], [41.3, 3893.0], [41.4, 3893.0], [41.5, 3893.0], [41.6, 3893.0], [41.7, 3893.0], [41.8, 3893.0], [41.9, 3893.0], [42.0, 3915.0], [42.1, 3915.0], [42.2, 3915.0], [42.3, 3915.0], [42.4, 3915.0], [42.5, 3915.0], [42.6, 3915.0], [42.7, 3915.0], [42.8, 3915.0], [42.9, 3915.0], [43.0, 3929.0], [43.1, 3929.0], [43.2, 3929.0], [43.3, 3929.0], [43.4, 3929.0], [43.5, 3929.0], [43.6, 3929.0], [43.7, 3929.0], [43.8, 3929.0], [43.9, 3929.0], [44.0, 3930.0], [44.1, 3930.0], [44.2, 3930.0], [44.3, 3930.0], [44.4, 3930.0], [44.5, 3930.0], [44.6, 3930.0], [44.7, 3930.0], [44.8, 3930.0], [44.9, 3930.0], [45.0, 3957.0], [45.1, 3957.0], [45.2, 3957.0], [45.3, 3957.0], [45.4, 3957.0], [45.5, 3957.0], [45.6, 3957.0], [45.7, 3957.0], [45.8, 3957.0], [45.9, 3957.0], [46.0, 3971.0], [46.1, 3971.0], [46.2, 3971.0], [46.3, 3971.0], [46.4, 3971.0], [46.5, 3971.0], [46.6, 3971.0], [46.7, 3971.0], [46.8, 3971.0], [46.9, 3971.0], [47.0, 3972.0], [47.1, 3972.0], [47.2, 3972.0], [47.3, 3972.0], [47.4, 3972.0], [47.5, 3972.0], [47.6, 3972.0], [47.7, 3972.0], [47.8, 3972.0], [47.9, 3972.0], [48.0, 3996.0], [48.1, 3996.0], [48.2, 3996.0], [48.3, 3996.0], [48.4, 3996.0], [48.5, 3996.0], [48.6, 3996.0], [48.7, 3996.0], [48.8, 3996.0], [48.9, 3996.0], [49.0, 4008.0], [49.1, 4008.0], [49.2, 4008.0], [49.3, 4008.0], [49.4, 4008.0], [49.5, 4008.0], [49.6, 4008.0], [49.7, 4008.0], [49.8, 4008.0], [49.9, 4008.0], [50.0, 4009.0], [50.1, 4009.0], [50.2, 4009.0], [50.3, 4009.0], [50.4, 4009.0], [50.5, 4009.0], [50.6, 4009.0], [50.7, 4009.0], [50.8, 4009.0], [50.9, 4009.0], [51.0, 4037.0], [51.1, 4037.0], [51.2, 4037.0], [51.3, 4037.0], [51.4, 4037.0], [51.5, 4037.0], [51.6, 4037.0], [51.7, 4037.0], [51.8, 4037.0], [51.9, 4037.0], [52.0, 4050.0], [52.1, 4050.0], [52.2, 4050.0], [52.3, 4050.0], [52.4, 4050.0], [52.5, 4050.0], [52.6, 4050.0], [52.7, 4050.0], [52.8, 4050.0], [52.9, 4050.0], [53.0, 4050.0], [53.1, 4050.0], [53.2, 4050.0], [53.3, 4050.0], [53.4, 4050.0], [53.5, 4050.0], [53.6, 4050.0], [53.7, 4050.0], [53.8, 4050.0], [53.9, 4050.0], [54.0, 4074.0], [54.1, 4074.0], [54.2, 4074.0], [54.3, 4074.0], [54.4, 4074.0], [54.5, 4074.0], [54.6, 4074.0], [54.7, 4074.0], [54.8, 4074.0], [54.9, 4074.0], [55.0, 4087.0], [55.1, 4087.0], [55.2, 4087.0], [55.3, 4087.0], [55.4, 4087.0], [55.5, 4087.0], [55.6, 4087.0], [55.7, 4087.0], [55.8, 4087.0], [55.9, 4087.0], [56.0, 4091.0], [56.1, 4091.0], [56.2, 4091.0], [56.3, 4091.0], [56.4, 4091.0], [56.5, 4091.0], [56.6, 4091.0], [56.7, 4091.0], [56.8, 4091.0], [56.9, 4091.0], [57.0, 4102.0], [57.1, 4102.0], [57.2, 4102.0], [57.3, 4102.0], [57.4, 4102.0], [57.5, 4102.0], [57.6, 4102.0], [57.7, 4102.0], [57.8, 4102.0], [57.9, 4102.0], [58.0, 4107.0], [58.1, 4107.0], [58.2, 4107.0], [58.3, 4107.0], [58.4, 4107.0], [58.5, 4107.0], [58.6, 4107.0], [58.7, 4107.0], [58.8, 4107.0], [58.9, 4107.0], [59.0, 4118.0], [59.1, 4118.0], [59.2, 4118.0], [59.3, 4118.0], [59.4, 4118.0], [59.5, 4118.0], [59.6, 4118.0], [59.7, 4118.0], [59.8, 4118.0], [59.9, 4118.0], [60.0, 4130.0], [60.1, 4130.0], [60.2, 4130.0], [60.3, 4130.0], [60.4, 4130.0], [60.5, 4130.0], [60.6, 4130.0], [60.7, 4130.0], [60.8, 4130.0], [60.9, 4130.0], [61.0, 4131.0], [61.1, 4131.0], [61.2, 4131.0], [61.3, 4131.0], [61.4, 4131.0], [61.5, 4131.0], [61.6, 4131.0], [61.7, 4131.0], [61.8, 4131.0], [61.9, 4131.0], [62.0, 4141.0], [62.1, 4141.0], [62.2, 4141.0], [62.3, 4141.0], [62.4, 4141.0], [62.5, 4141.0], [62.6, 4141.0], [62.7, 4141.0], [62.8, 4141.0], [62.9, 4141.0], [63.0, 4147.0], [63.1, 4147.0], [63.2, 4147.0], [63.3, 4147.0], [63.4, 4147.0], [63.5, 4147.0], [63.6, 4147.0], [63.7, 4147.0], [63.8, 4147.0], [63.9, 4147.0], [64.0, 4154.0], [64.1, 4154.0], [64.2, 4154.0], [64.3, 4154.0], [64.4, 4154.0], [64.5, 4154.0], [64.6, 4154.0], [64.7, 4154.0], [64.8, 4154.0], [64.9, 4154.0], [65.0, 4167.0], [65.1, 4167.0], [65.2, 4167.0], [65.3, 4167.0], [65.4, 4167.0], [65.5, 4167.0], [65.6, 4167.0], [65.7, 4167.0], [65.8, 4167.0], [65.9, 4167.0], [66.0, 4171.0], [66.1, 4171.0], [66.2, 4171.0], [66.3, 4171.0], [66.4, 4171.0], [66.5, 4171.0], [66.6, 4171.0], [66.7, 4171.0], [66.8, 4171.0], [66.9, 4171.0], [67.0, 4181.0], [67.1, 4181.0], [67.2, 4181.0], [67.3, 4181.0], [67.4, 4181.0], [67.5, 4181.0], [67.6, 4181.0], [67.7, 4181.0], [67.8, 4181.0], [67.9, 4181.0], [68.0, 4196.0], [68.1, 4196.0], [68.2, 4196.0], [68.3, 4196.0], [68.4, 4196.0], [68.5, 4196.0], [68.6, 4196.0], [68.7, 4196.0], [68.8, 4196.0], [68.9, 4196.0], [69.0, 4209.0], [69.1, 4209.0], [69.2, 4209.0], [69.3, 4209.0], [69.4, 4209.0], [69.5, 4209.0], [69.6, 4209.0], [69.7, 4209.0], [69.8, 4209.0], [69.9, 4209.0], [70.0, 4211.0], [70.1, 4211.0], [70.2, 4211.0], [70.3, 4211.0], [70.4, 4211.0], [70.5, 4211.0], [70.6, 4211.0], [70.7, 4211.0], [70.8, 4211.0], [70.9, 4211.0], [71.0, 4217.0], [71.1, 4217.0], [71.2, 4217.0], [71.3, 4217.0], [71.4, 4217.0], [71.5, 4217.0], [71.6, 4217.0], [71.7, 4217.0], [71.8, 4217.0], [71.9, 4217.0], [72.0, 4233.0], [72.1, 4233.0], [72.2, 4233.0], [72.3, 4233.0], [72.4, 4233.0], [72.5, 4233.0], [72.6, 4233.0], [72.7, 4233.0], [72.8, 4233.0], [72.9, 4233.0], [73.0, 4246.0], [73.1, 4246.0], [73.2, 4246.0], [73.3, 4246.0], [73.4, 4246.0], [73.5, 4246.0], [73.6, 4246.0], [73.7, 4246.0], [73.8, 4246.0], [73.9, 4246.0], [74.0, 4253.0], [74.1, 4253.0], [74.2, 4253.0], [74.3, 4253.0], [74.4, 4253.0], [74.5, 4253.0], [74.6, 4253.0], [74.7, 4253.0], [74.8, 4253.0], [74.9, 4253.0], [75.0, 4258.0], [75.1, 4258.0], [75.2, 4258.0], [75.3, 4258.0], [75.4, 4258.0], [75.5, 4258.0], [75.6, 4258.0], [75.7, 4258.0], [75.8, 4258.0], [75.9, 4258.0], [76.0, 4279.0], [76.1, 4279.0], [76.2, 4279.0], [76.3, 4279.0], [76.4, 4279.0], [76.5, 4279.0], [76.6, 4279.0], [76.7, 4279.0], [76.8, 4279.0], [76.9, 4279.0], [77.0, 4287.0], [77.1, 4287.0], [77.2, 4287.0], [77.3, 4287.0], [77.4, 4287.0], [77.5, 4287.0], [77.6, 4287.0], [77.7, 4287.0], [77.8, 4287.0], [77.9, 4287.0], [78.0, 4291.0], [78.1, 4291.0], [78.2, 4291.0], [78.3, 4291.0], [78.4, 4291.0], [78.5, 4291.0], [78.6, 4291.0], [78.7, 4291.0], [78.8, 4291.0], [78.9, 4291.0], [79.0, 4312.0], [79.1, 4312.0], [79.2, 4312.0], [79.3, 4312.0], [79.4, 4312.0], [79.5, 4312.0], [79.6, 4312.0], [79.7, 4312.0], [79.8, 4312.0], [79.9, 4312.0], [80.0, 4325.0], [80.1, 4325.0], [80.2, 4325.0], [80.3, 4325.0], [80.4, 4325.0], [80.5, 4325.0], [80.6, 4325.0], [80.7, 4325.0], [80.8, 4325.0], [80.9, 4325.0], [81.0, 4349.0], [81.1, 4349.0], [81.2, 4349.0], [81.3, 4349.0], [81.4, 4349.0], [81.5, 4349.0], [81.6, 4349.0], [81.7, 4349.0], [81.8, 4349.0], [81.9, 4349.0], [82.0, 6000.0], [82.1, 6000.0], [82.2, 6000.0], [82.3, 6000.0], [82.4, 6000.0], [82.5, 6000.0], [82.6, 6000.0], [82.7, 6000.0], [82.8, 6000.0], [82.9, 6000.0], [83.0, 6038.0], [83.1, 6038.0], [83.2, 6038.0], [83.3, 6038.0], [83.4, 6038.0], [83.5, 6038.0], [83.6, 6038.0], [83.7, 6038.0], [83.8, 6038.0], [83.9, 6038.0], [84.0, 6081.0], [84.1, 6081.0], [84.2, 6081.0], [84.3, 6081.0], [84.4, 6081.0], [84.5, 6081.0], [84.6, 6081.0], [84.7, 6081.0], [84.8, 6081.0], [84.9, 6081.0], [85.0, 6119.0], [85.1, 6119.0], [85.2, 6119.0], [85.3, 6119.0], [85.4, 6119.0], [85.5, 6119.0], [85.6, 6119.0], [85.7, 6119.0], [85.8, 6119.0], [85.9, 6119.0], [86.0, 6159.0], [86.1, 6159.0], [86.2, 6159.0], [86.3, 6159.0], [86.4, 6159.0], [86.5, 6159.0], [86.6, 6159.0], [86.7, 6159.0], [86.8, 6159.0], [86.9, 6159.0], [87.0, 6198.0], [87.1, 6198.0], [87.2, 6198.0], [87.3, 6198.0], [87.4, 6198.0], [87.5, 6198.0], [87.6, 6198.0], [87.7, 6198.0], [87.8, 6198.0], [87.9, 6198.0], [88.0, 6239.0], [88.1, 6239.0], [88.2, 6239.0], [88.3, 6239.0], [88.4, 6239.0], [88.5, 6239.0], [88.6, 6239.0], [88.7, 6239.0], [88.8, 6239.0], [88.9, 6239.0], [89.0, 6278.0], [89.1, 6278.0], [89.2, 6278.0], [89.3, 6278.0], [89.4, 6278.0], [89.5, 6278.0], [89.6, 6278.0], [89.7, 6278.0], [89.8, 6278.0], [89.9, 6278.0], [90.0, 6317.0], [90.1, 6317.0], [90.2, 6317.0], [90.3, 6317.0], [90.4, 6317.0], [90.5, 6317.0], [90.6, 6317.0], [90.7, 6317.0], [90.8, 6317.0], [90.9, 6317.0], [91.0, 6360.0], [91.1, 6360.0], [91.2, 6360.0], [91.3, 6360.0], [91.4, 6360.0], [91.5, 6360.0], [91.6, 6360.0], [91.7, 6360.0], [91.8, 6360.0], [91.9, 6360.0], [92.0, 6398.0], [92.1, 6398.0], [92.2, 6398.0], [92.3, 6398.0], [92.4, 6398.0], [92.5, 6398.0], [92.6, 6398.0], [92.7, 6398.0], [92.8, 6398.0], [92.9, 6398.0], [93.0, 6436.0], [93.1, 6436.0], [93.2, 6436.0], [93.3, 6436.0], [93.4, 6436.0], [93.5, 6436.0], [93.6, 6436.0], [93.7, 6436.0], [93.8, 6436.0], [93.9, 6436.0], [94.0, 6479.0], [94.1, 6479.0], [94.2, 6479.0], [94.3, 6479.0], [94.4, 6479.0], [94.5, 6479.0], [94.6, 6479.0], [94.7, 6479.0], [94.8, 6479.0], [94.9, 6479.0], [95.0, 6516.0], [95.1, 6516.0], [95.2, 6516.0], [95.3, 6516.0], [95.4, 6516.0], [95.5, 6516.0], [95.6, 6516.0], [95.7, 6516.0], [95.8, 6516.0], [95.9, 6516.0], [96.0, 6555.0], [96.1, 6555.0], [96.2, 6555.0], [96.3, 6555.0], [96.4, 6555.0], [96.5, 6555.0], [96.6, 6555.0], [96.7, 6555.0], [96.8, 6555.0], [96.9, 6555.0], [97.0, 6567.0], [97.1, 6567.0], [97.2, 6567.0], [97.3, 6567.0], [97.4, 6567.0], [97.5, 6567.0], [97.6, 6567.0], [97.7, 6567.0], [97.8, 6567.0], [97.9, 6567.0], [98.0, 6603.0], [98.1, 6603.0], [98.2, 6603.0], [98.3, 6603.0], [98.4, 6603.0], [98.5, 6603.0], [98.6, 6603.0], [98.7, 6603.0], [98.8, 6603.0], [98.9, 6603.0], [99.0, 6645.0], [99.1, 6645.0], [99.2, 6645.0], [99.3, 6645.0], [99.4, 6645.0], [99.5, 6645.0], [99.6, 6645.0], [99.7, 6645.0], [99.8, 6645.0], [99.9, 6645.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 27.0, "series": [{"data": [[0.0, 27.0], [3700.0, 1.0], [3800.0, 8.0], [3900.0, 7.0], [4000.0, 8.0], [4100.0, 12.0], [4200.0, 10.0], [4300.0, 3.0], [6100.0, 3.0], [6000.0, 3.0], [6300.0, 3.0], [6200.0, 2.0], [100.0, 6.0], [6600.0, 2.0], [6500.0, 3.0], [6400.0, 2.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 33.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 67.0, "series": [{"data": [[0.0, 33.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 67.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 27.820000000000004, "minX": 1.68544128E12, "maxY": 27.820000000000004, "series": [{"data": [[1.68544128E12, 27.820000000000004]], "isOverall": false, "label": "Prueba_Rendimiento", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544128E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 8.5, "minX": 1.0, "maxY": 6360.0, "series": [{"data": [[2.0, 6000.0], [3.0, 6360.0], [5.0, 6319.0], [6.0, 3154.0], [7.0, 3041.5], [8.0, 8.5], [9.0, 3124.25], [10.0, 2083.0], [11.0, 3176.0], [12.0, 2183.0], [13.0, 3255.0], [14.0, 2220.6666666666665], [15.0, 1742.5], [16.0, 2280.3333333333335], [17.0, 113.0], [18.0, 2678.0], [19.0, 3860.0], [20.0, 1466.0], [21.0, 1413.3333333333333], [22.0, 1054.5], [23.0, 3957.0], [24.0, 4196.0], [25.0, 3836.0], [26.0, 3876.0], [27.0, 3915.0], [28.0, 3996.0], [29.0, 4074.0], [30.0, 4154.0], [31.0, 4233.0], [32.0, 4312.0], [35.0, 4130.0], [34.0, 4131.0], [37.0, 4130.5], [38.0, 3890.0], [41.0, 3929.0], [40.0, 4099.0], [43.0, 4087.0], [42.0, 4008.0], [45.0, 4246.0], [44.0, 4167.0], [46.0, 4325.0], [48.0, 3852.0], [50.0, 4131.0], [52.0, 4031.5], [54.0, 3971.0], [56.0, 3990.5], [59.0, 4209.0], [58.0, 3990.0], [61.0, 4217.0], [60.0, 4287.0], [62.0, 4102.0], [67.0, 4147.0], [66.0, 4107.0], [65.0, 4258.0], [64.0, 4161.0], [1.0, 6081.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[27.810000000000006, 3163.080000000001]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 67.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 200.0, "minX": 1.68544128E12, "maxY": 9115.0, "series": [{"data": [[1.68544128E12, 9115.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68544128E12, 200.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544128E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3163.080000000001, "minX": 1.68544128E12, "maxY": 3163.080000000001, "series": [{"data": [[1.68544128E12, 3163.080000000001]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544128E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3163.040000000001, "minX": 1.68544128E12, "maxY": 3163.040000000001, "series": [{"data": [[1.68544128E12, 3163.040000000001]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544128E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 5.610000000000002, "minX": 1.68544128E12, "maxY": 5.610000000000002, "series": [{"data": [[1.68544128E12, 5.610000000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544128E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.68544128E12, "maxY": 6645.0, "series": [{"data": [[1.68544128E12, 6645.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68544128E12, 6313.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68544128E12, 6644.58]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68544128E12, 6514.15]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68544128E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68544128E12, 4008.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 68.0, "minX": 18.0, "maxY": 6338.5, "series": [{"data": [[33.0, 68.0], [18.0, 6338.5], [49.0, 4102.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 68.0, "minX": 18.0, "maxY": 6338.5, "series": [{"data": [[33.0, 68.0], [18.0, 6338.5], [49.0, 4102.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68544128E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.68544128E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544128E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68544128E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.68544128E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544128E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68544128E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.68544128E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544128E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68544128E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.68544128E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544128E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

