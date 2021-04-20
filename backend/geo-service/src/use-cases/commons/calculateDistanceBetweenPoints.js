export const calculateDistanceBetweenPoints = ({
  originLatitude,
  originLongitude,
  destinationLatitude,
  destinationLongitude,
}) => {
  return new Promise(function (success, nosuccess) {
    const { spawn } = require("child_process");
    const pyprog = spawn("python3", [
      require("path").resolve(
        __dirname,
        "../../python-modules/calculate_distance.py"
      ),
      originLatitude,
      originLongitude,
      destinationLatitude,
      destinationLongitude,
    ]);

    pyprog.stdout.on("data", function (data) {
      success(data);
    });

    pyprog.stderr.on("data", (data) => {
      nosuccess(data);
    });
  });
};
