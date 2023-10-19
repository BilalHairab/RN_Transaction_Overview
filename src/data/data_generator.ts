/* For further or later modifications/reference
 * The used code in https://json-generator.com/
 * to generate the 1000 transactions is stated below
 */
[
  '{{repeat(1000)}}',
  {
    objectType: 'TRANSACTION',
    status: function (tags) {
      var status_cases = [
        'APPROVED',
        'DECLINED',
        'PENDING',
        'CANCELLED',
        'IN_REVIEW',
      ];
      return status_cases[tags.integer(0, status_cases.length - 1)];
    },
    objectId: '{{objectId()}}',
    timestamp:
      '{{date(new Date(2022, 1, 1), new Date(), "YYYY-MM-ddThh:mm:ss")}}',
    details: {
      origin: function (tags) {
        var status_cases = [
          'MOBILE_APP',
          'WEB_PORTAL',
          'IN_PERSON',
          'ATM_MACHINE',
          'PHONE_CALL',
        ];
        return status_cases[tags.integer(0, status_cases.length - 1)];
      },
    },
  },
];
