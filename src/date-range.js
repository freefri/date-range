angular.module('ct.date-range', ['pikaday']).directive('dateRange', function ($timeout) {

    Date.prototype.setBeginDay = function () {
        this.setMilliseconds(0);
        this.setSeconds(0);
        this.setMinutes(0);
        this.setHours(0);
        return this;
    };
    Date.prototype.setEndDay = function () {
        this.setDate(this.getDate() + 1);
        this.setBeginDay();
        this.setSeconds(-1);
        return this;
    };

    return {
        restrict: 'E',
        replace: true,
        scope: {
            onChange: '='
        },
        templateUrl: 'src/date-range.html',
        controller: function($scope) {
            var begDate = new Date();
            begDate.setMonth(begDate.getMonth()-1);
            var date = {
                begin: begDate,
                end: (new Date())
            };
            var timeout;
            $scope.onDateChange = function (value, type) {
                date[type] = new Date(value);
                $scope.error = false;
                if (type == 'begin') {
                    $scope.endPicker.setMinDate(date[type]);
                } else {
                    $scope.beginPicker.setMaxDate(date[type]);
                }
                if (timeout) {
                    $timeout.cancel(timeout);
                }
                timeout = $timeout(function () {
                    timeout = false;
                    date.begin.setBeginDay();
                    date.end.setEndDay();
                    var res = $scope.onChange(date);
                    if (res && res.catch) {
                        res.catch(function () {
                            $scope.error = true;
                        });
                    }
                }, 500);
            };
            $timeout(function () {
                $scope.endPicker.setMaxDate(new Date());
                $scope.beginPicker.setDate(date.begin);
                $scope.endPicker.setDate(date.end);
            }, 0);

        }
    };
});
