using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeBrew
{
    public class BrixConverter
    {
        public double BrixToSpecficGravity(double brix)
        {
            // Takes a brix measurement from a refractometer and converts it to a Specfic Gravity measurement
            double Brix = brix;
            double SpecficGravity = (Brix / (258.6 - ((Brix / 258.2) * 227.1)) + 1);
            return SpecficGravity;
        }

        
    }
}
