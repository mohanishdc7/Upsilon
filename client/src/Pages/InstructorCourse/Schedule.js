import { Button } from "@chakra-ui/button";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { API } from "../../Components/Utilities/Constants";
import Auth from "../../Components/Auth/Auth";
import axios from "axios";

function Schedule({ courseId }) {
  const d = new Date();
  const [sc, setsc] = useState(0);
  
  const [scheduledClasses, setScheduledClasses] = useState([]);

  useEffect(async () => {
    const res = await axios.post(
      `${API}/getCourse`,
      { courseId },
      { headers: { token: Auth.userToken } }
    );
    const a = res.data.course.scheduledClasses;
    console.log(a);
    setScheduledClasses(a);
  }, [sc]);

  const [selectedDate, setSelectedDate] = useState(d);

  const [dur, setDur] = useState(60);

  const [className, setClassname] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const timeformat = (a) => {
    let x = a.getHours();
    let y = a.getMinutes();
    if (y === 0) y = "00";
    else if (y < 10) y = "0" + y;
    if (x / 12 < 1) {
      if (x < 10) return `0${x}:${y} AM`;
      else return `${x}:${y} AM`;
    } else {
      x = x % 12;
      if (x < 10) return `0${x}:${y} PM`;
      else return `${x}:${y} PM`;
    }
  };

  const month = (a) => {
    const b = a.getMonth();
    switch (b) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  };

  const endcalc = (a, dur) => {
    let z = parseInt(dur);
    let x = a.getHours();
    let y = a.getMinutes();
    y += z;
    console.log(Math.floor(y / 60));
    x += Math.floor(y / 60);
    y = y % 60;
    console.log(x, y);
    if (y === 0) y = "00";
    else if (y < 10) y = "0" + y;
    if (x / 12 < 1) {
      if (x < 10) return `0${x}:${y} AM`;
      else return `${x}:${y} AM`;
    } else {
      x = x % 12;
      if (x < 10) return `0${x}:${y} PM`;
      else return `${x}:${y} PM`;
    }
  };

  const handleClass = async () => {
    try {
      const a = selectedDate;

      const req = {
        className,
        courseId,
        date: a.getDate().toString(),
        timestamp: Date.now(),
        id: scheduledClasses.length + 1,
        month: month(a),
        time: timeformat(a),
        endtime: endcalc(a, dur),
      };
      console.log(req);

      const res = await axios.post(`${API}/scheduleClass`, req, {
        headers: { token: Auth.userToken },
      });
    setsc(0);
      alert(res.data.message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cismain" style={{margin:"20px"}}>
      <div className="cib1">
        <Button colorScheme="purple" onClick={()=> setsc(1)}>Schedule a Class</Button>

      {  
        sc===0? null :
        <div className="setic">
          <div>
            <div style={{ marginBottom: "20px" }}>
              <FormControl>
                <FormLabel>
                  <span>Class Name</span>
                </FormLabel>
                <Input
                  type="text"
                  value={className}
                  onChange={(e) => setClassname(e.target.value)}
                />
              </FormControl>
            </div>
            <FormControl>
              <FormLabel>Class Duration (in mins)</FormLabel>
              <NumberInput
                value={dur}
                onChange={(e) => {
                  setDur(e);
                }}
                step={5}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </div>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="dialog"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>

          <Button
            colorScheme="purple"
            onClick={() => {
              handleClass();
            }}
          >
            Schedule
          </Button>
        </div>
      }
      </div>

      <div className="cistb" style={{ display: "flex" }}>
        <div className="cist">
          <span style={{ fontWeight: 800, fontSize: "18px" }}>
            Scheduled Classes
          </span>
          {scheduledClasses.length === 0 ? (
            <div> No classes Scheduled</div>
          ) : (
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Class</Th>
                  <Th>Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {scheduledClasses.map((c) => (
                  <Tr>
                    <Td className="t1">
                      {c.date}th {c.month}
                    </Td>
                    <Td className="t2">
                      <Link to="/">{c.className}</Link>
                    </Td>
                    <Td className="t3">
                      {c.time} - {c.endtime}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
