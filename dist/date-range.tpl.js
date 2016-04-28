angular.module('ct.date-range').run(['$templateCache', function($templateCache) {

    $templateCache.put('angular-pull-to-refresh.tpl.html',
        "<span class=\"date-range\" ng-class=\"{error: error}\">\n" +
        "<input type=\"text\" class=\"beginEnd right pull-right\"\n" +
        "  pikaday=\"endPicker\"\n" +
        "  on-select=\"onDateChange(date, 'end')\"/>\n" +
        "<input type=\"text\" class=\"beginEnd right pull-right\"\n" +
        "  pikaday=\"beginPicker\"\n" +
        "  on-select=\"onDateChange(date, 'begin')\"/>\n" +
        "</span>\n"
    );

}]);
