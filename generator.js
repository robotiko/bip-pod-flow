/**
 *
 * The Bipio Flow Pod.  generator action definition
 * ---------------------------------------------------------------
 *
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function Generator(podConfig) {
  this.name = 'generator';
  this.description = 'Generate a Payload',
  this.description_long = 'Generates a Payload that can be processed by a Trigger Bip',
  this.trigger = true;
  this.singleton = false;
  this.podConfig = podConfig;
}

Generator.prototype = {};

Generator.prototype.getSchema = function() {
  return {
    'config' : {
      properties : {
        'payload' : {
          type : "string",
          description : "Payload"
        }
      }
    },
    'exports' : {
      properties : {
        'payload' : {
          type : "string",
          description : "Payload"
        }
      }
    }
  }
}

/**
 * Invokes (runs) the action.
 */
Generator.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
  next(false, {
    'payload' : channel.config.payload
  });
}

// -----------------------------------------------------------------------------
module.exports = Generator;